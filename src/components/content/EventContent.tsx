"use client";

import { type ParagraphObject } from "@/app/event/[id]/page";
import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import IconBackArrow from "../icons/IconBackArrow";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";
import ColorChangingGradient from "./ColorChangingGradient";
import TopWhiteGradient from "./TopWhiteGradient";

export default function EventContent({
  parsedData,
  descriptionArray,
  formattedDate,
  differenceInHours,
  dominantColor,
  defaultTextColor,
  averageImageTopColor,
}: {
  parsedData: Event;
  descriptionArray: ParagraphObject[];
  formattedDate: string;
  differenceInHours: string;
  dominantColor: string;
  defaultTextColor: string;
  averageImageTopColor: string;
}) {
  const [scrolledPast, setScrolledPast] = useState<boolean>(false);
  const [secondScrolledPast, setSecondScrolledPast] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const thresholdPercentage: number = 40;

      const secondThresholdPercentage: number = 10;

      const elementRelativeToViewport: DOMRect =
        elementRef.current.getBoundingClientRect();
      const viewportHeight: number = window.innerHeight;
      const scrollThresholdInPixels: number =
        (thresholdPercentage / 100) * viewportHeight;
      const secondScrollThresholdInPixels: number =
        (secondThresholdPercentage / 100) * viewportHeight;

      const didItScrollPastTheThreshold: boolean =
        elementRelativeToViewport.top < scrollThresholdInPixels;

      const secondDidItScrollPastTheThreshold: boolean =
        elementRelativeToViewport.top < secondScrollThresholdInPixels;

      if (didItScrollPastTheThreshold) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }

      if (secondDidItScrollPastTheThreshold) {
        setSecondScrolledPast(true);
      } else {
        setSecondScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const componentStyleOne: CSSProperties = {
    backgroundColor: "rgb(" + dominantColor + ")",
    color: defaultTextColor,
  };

  const componentStyleTwo: CSSProperties = {
    backgroundColor: "var(--Brand-White)",
    color: "var(--Brand-Black)",
  };

  const bgColors = {
    styleTwo: "var(--Brand-White)",
    styleOne: "rgb(" + dominantColor + ")",
  };

  const bodyColors = {
    styleTwo: "var(--Brand-White)",
    styleOne: "rgb(" + averageImageTopColor + ")",
  };

  const imageOpacities = {
    styleTwo: "0.25",
    styleOne: "1",
  };

  const gradientOpacities = {
    styleTwo: "1",
    styleOne: "0",
  };

  const iconColors = {
    styleTwo: "var(--Brand-Black)",
    styleOne: defaultTextColor,
  };

  return (
    <body
      className="text-xl font-body text-brandBlack"
      style={{
        backgroundColor: scrolledPast
          ? bodyColors["styleTwo"]
          : bodyColors["styleOne"],
      }}
    >
      <main
        className="transition-colors"
        style={{
          backgroundColor: scrolledPast
            ? bgColors["styleTwo"]
            : bgColors["styleOne"],
        }}
      >
        <img
          className="fixed -z-1 left-0 right-0 top-0 transition-opacity"
          style={{
            opacity: scrolledPast
              ? imageOpacities["styleTwo"]
              : imageOpacities["styleOne"],
          }}
          src={parsedData.image}
        />
        <div className="flex flex-col relative">
          <div className="fixed left-0 right-0 top-0 flex justify-between px-5 py-3">
            <Link href="/" className="relative">
              <IconBackArrow
                color={
                  scrolledPast ? iconColors["styleTwo"] : iconColors["styleOne"]
                }
              />
            </Link>
            <TopWhiteGradient
              opacity={
                secondScrolledPast
                  ? gradientOpacities["styleTwo"]
                  : gradientOpacities["styleOne"]
              }
            />
          </div>
          <div className="aspect-square flex flex-col justify-end">
            <ColorChangingGradient
              color={
                scrolledPast
                  ? "var(--Brand-White)"
                  : "rgb(" + dominantColor + ")"
              }
            />
          </div>
          <div
            className="bg-brandWhite px-5 transition-colors"
            ref={elementRef}
            style={scrolledPast ? componentStyleTwo : componentStyleOne}
          >
            <div className="flex flex-col gap-9 -mt-12">
              <div className="flex flex-col gap-5">
                <div className="text-4xl">{parsedData.name}</div>
                <div className="flex gap-4 font-medium">
                  <div className="flex gap-2 items-center leading-none">
                    <IconCalendarSmall
                      color={
                        scrolledPast
                          ? iconColors["styleTwo"]
                          : iconColors["styleOne"]
                      }
                    />
                    <div>{formattedDate}</div>
                  </div>
                  <div className="flex gap-2 items-center leading-none">
                    <IconClockSmall
                      color={
                        scrolledPast
                          ? iconColors["styleTwo"]
                          : iconColors["styleOne"]
                      }
                    />
                    <div>{differenceInHours}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {descriptionArray.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph.text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
