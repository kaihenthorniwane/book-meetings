import EventContent from "@/components/content/EventContent";
import { type Event, type EventTime } from "@/context/user-sessions-context";
import { getEventUsingID } from "@/store/dataStore";
import {
  getAverageTopColor,
  getDominantColor,
  getRelativeLuminance,
} from "@/util/sampleColor";
import { cache } from "react";

const cacheGetDominantColor = cache(getDominantColor);
const cacheGetRelativeLuminance = cache(getRelativeLuminance);
const cacheGetAverageTopColor = cache(getAverageTopColor);

export type ParagraphObject = {
  text: string;
  id: string;
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
  const dominantColor: string = await cacheGetDominantColor(imageUrl);
  const colorLuminance: number = cacheGetRelativeLuminance(dominantColor);
  const isTooDark: boolean = colorLuminance < 0.5;
  const defaultTextColor = isTooDark
    ? "var(--Brand-White)"
    : "var(--Brand-Black)";
  const averageImageTopColor: string = await cacheGetAverageTopColor(imageUrl);

  return (
    <EventContent
      descriptionArray={descriptionArray}
      formattedDate={formattedDate}
      differenceInHours={differenceInHours}
      parsedData={parsedData}
      dominantColor={dominantColor}
      defaultTextColor={defaultTextColor}
      averageImageTopColor={averageImageTopColor}
    />
  );
}
