"use client";

import {
  type ThemeStyleOptions,
  type ParagraphObject,
} from "@/app/event/[id]/page";
import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";
import IconBackArrow from "../icons/IconBackArrow";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";
import ColorChangingGradient from "./ColorChangingGradient";
import TopWhiteGradient from "./TopWhiteGradient";

export type EventContentProps = {
  parsedData: Event;
  descriptionArray: ParagraphObject[];
  formattedDate: string;
  differenceInHours: string;
  dominantColor: string;
  themeStyleOptions: ThemeStyleOptions;
  otherEventHTML: ReactNode;
};

export default function EventContent({
  parsedData,
  descriptionArray,
  formattedDate,
  differenceInHours,
  dominantColor,
  themeStyleOptions,
  otherEventHTML,
}: EventContentProps) {
  const [scrolledPast, setScrolledPast] = useState<boolean>(false);
  const [secondScrolledPast, setSecondScrolledPast] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    componentStyleOne,
    componentStyleTwo,
    bgColors,
    bodyColors,
    imageOpacities,
    gradientOpacities,
    iconColors,
  } = themeStyleOptions;

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const thresholdPercentage: number = 40;

      const secondThresholdPercentage: number = 15;

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
            className="bg-brandWhite px-5 pb-12 transition-colors"
            ref={elementRef}
            style={scrolledPast ? componentStyleTwo : componentStyleOne}
          >
            <div className="flex flex-col gap-9 -mt-12">
              <div className="flex flex-col gap-5">
                <div className="flex gap-1 text-base">
                  <Link href={"/"}> Home </Link>
                  {"/"}
                  <Link href={"/event/" + parsedData.id}>
                    {" "}
                    {parsedData.name}{" "}
                  </Link>
                </div>
                <span className="text-4xl">{parsedData.name}</span>
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
          <div
            className="transition-colors"
            style={scrolledPast ? componentStyleTwo : componentStyleOne}
          >
            {otherEventHTML}
          </div>
        </div>
      </main>
    </body>
  );
}
