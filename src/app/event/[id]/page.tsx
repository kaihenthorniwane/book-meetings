import EventContent from "@/components/content/EventContent";
import EventContentSwitcher from "@/components/content/EventContentSwitcher";
import OtherEvents from "@/components/content/OtherEvents";
import { type Event, type EventTime } from "@/context/user-sessions-context";
import { getEventAfterTheOneWithID, getEventUsingID } from "@/store/dataStore";
import {
  formatRgbObject,
  getAverageTopColor,
  getDominantColor,
  getRelativeLuminance,
  makeColorMoreContrasty,
  makeColorMoreContrastyPreservingSaturation,
  type rgbObject,
} from "@/util/sampleColor";
import { unstable_cache } from "next/cache";
import { type CSSProperties, type ReactNode } from "react";

const getCachedDominantColor = unstable_cache(getDominantColor);

const getCachedAverageTopColor = unstable_cache(getAverageTopColor);

export type ParagraphObject = {
  text: string;
  id: string;
};

export type StyleSwitch = {
  styleTwo: string;
  styleOne: string;
};

export type ThemeStyleOptions = {
  componentStyleOne: CSSProperties;
  componentStyleTwo: CSSProperties;
  bgColors: StyleSwitch;
  bodyColors: StyleSwitch;
  imageOpacities: StyleSwitch;
  gradientOpacities: StyleSwitch;
  iconColors: StyleSwitch;
};

export default async function Page({ params }: { params: { id: string } }) {
  const eventData = getEventUsingID(params.id);
  if ("error" in eventData) {
    return <>An error occured</>;
  }
  const parsedData: Event = eventData;

  const date: Date = new Date(parsedData.date);
  const formattedDate: string = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function convertDecimalHoursToReadableTime(decimalHours: number): string {
    const hours: number = Math.floor(decimalHours);
    const minutes: number = Math.round((decimalHours - hours) * 60);
    let readableTime: string = "";

    if (hours > 0) readableTime += `${hours} hour${hours > 1 ? "s" : ""} `;
    if (minutes > 0 && hours > 0) readableTime += `${minutes} min`;
    else if (minutes > 0) readableTime += `${minutes} minutes`;

    return readableTime.trim() || "0 minutes";
  }

  const times: EventTime[] = parsedData.times;
  const firstTime: EventTime = times[0];
  const startTime: Date = new Date(firstTime.start);
  const endTime: Date = new Date(firstTime.end);
  const differenceInMilliseconds: number =
    endTime.getTime() - startTime.getTime();
  const differenceInHours: string = convertDecimalHoursToReadableTime(
    differenceInMilliseconds / (1000 * 60 * 60)
  );

  function splitStringByNewlineToObjects(input: string): ParagraphObject[] {
    const newArray: ParagraphObject[] = input
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((text, index) => {
        const salt: string = text.substring(0, 5).replace(/\s/g, "");
        const id: string = `${index}-${salt}`;
        return { text, id };
      });
    return newArray;
  }

  const rawDescription: string = parsedData.description;
  const descriptionArray: ParagraphObject[] =
    splitStringByNewlineToObjects(rawDescription);

  const imageUrl: string = parsedData.image;
  const sourceDominantColor: rgbObject = await getCachedDominantColor(imageUrl);
  const colorLuminance: number = getRelativeLuminance(sourceDominantColor);
  const isTooDark: boolean = colorLuminance < 0.5;
  const proximityToGrey: number = Math.abs(0.5 - colorLuminance);
  let dominantColor;
  if (proximityToGrey < 0.1) {
    dominantColor = formatRgbObject(
      makeColorMoreContrastyPreservingSaturation(
        sourceDominantColor,
        isTooDark ? "darken" : "lighten"
      )
    );
  } else if (proximityToGrey < 0.3) {
    dominantColor = formatRgbObject(
      makeColorMoreContrastyPreservingSaturation(
        sourceDominantColor,
        isTooDark ? "darken" : "lighten",
        0.15,
        0.25
      )
    );
  } else {
    dominantColor = formatRgbObject(sourceDominantColor);
  }
  const defaultTextColor = isTooDark
    ? "var(--Brand-White)"
    : "var(--Brand-Black)";
  const sourceAverageImageTopColor: rgbObject = await getCachedAverageTopColor(
    imageUrl
  );
  const averageImageTopColor: string = formatRgbObject(
    sourceAverageImageTopColor
  );

  const componentStyleOne: CSSProperties = {
    backgroundColor: "rgb(" + dominantColor + ")",
    color: defaultTextColor,
  };

  const componentStyleTwo: CSSProperties = {
    backgroundColor: "var(--Brand-White)",
    color: "var(--Brand-Black)",
  };

  const bgColors: StyleSwitch = {
    styleTwo: "var(--Brand-White)",
    styleOne: "rgb(" + dominantColor + ")",
  };

  const bodyColors: StyleSwitch = {
    styleTwo: "var(--Brand-White)",
    styleOne: "rgb(" + averageImageTopColor + ")",
  };

  const imageOpacities: StyleSwitch = {
    styleTwo: "0.25",
    styleOne: "1",
  };

  const gradientOpacities: StyleSwitch = {
    styleTwo: "1",
    styleOne: "0",
  };

  const iconColors: StyleSwitch = {
    styleTwo: "var(--Brand-Black)",
    styleOne: defaultTextColor,
  };

  const themeStyleOptions: ThemeStyleOptions = {
    componentStyleOne,
    componentStyleTwo,
    bgColors,
    bodyColors,
    imageOpacities,
    gradientOpacities,
    iconColors,
  };

  const otherEvent: Event | { error: string } = getEventAfterTheOneWithID(
    params.id
  );
  const otherEventHTML: ReactNode =
    "error" in otherEvent ? <></> : <OtherEvents eventItem={otherEvent} />;

  return (
    <EventContentSwitcher
      descriptionArray={descriptionArray}
      formattedDate={formattedDate}
      differenceInHours={differenceInHours}
      parsedData={parsedData}
      dominantColor={dominantColor}
      themeStyleOptions={themeStyleOptions}
      otherEventHTML={otherEventHTML}
    />
  );
}
