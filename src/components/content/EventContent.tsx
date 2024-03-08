"use client";

import {
  type ThemeStyleOptions,
  type ParagraphObject,
} from "@/app/event/[id]/page";
import { type EventInfo } from "@/context/user-sessions-context";
import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";
import BookASessionDrawer from "../drawer/BookASessionDrawer";
import IconBackArrow from "../icons/IconBackArrow";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";
import UserSessionsCountButton from "../user-sessions/UserSessionsCountButton";
import ColorChangingGradient from "./ColorChangingGradient";
import TopWhiteGradient from "./TopWhiteGradient";

export type EventContentProps = {
  parsedData: EventInfo;
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
  const [titleScrolledPast, setTitleScrolledPast] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  const {
    componentStyleOne,
    componentStyleTwo,
    CTABGStyleOne,
    CTABGStyleTwo,
    CTATextColors,
    bgColors,
    bodyColors,
    imageOpacities,
    gradientOpacities,
    iconColors,
  } = themeStyleOptions;

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current || !titleRef.current) return;

      const thresholdPercentage: number = 25;

      const secondThresholdPercentage: number = 15;

      const titleThresholdPercentage: number = 5;

      const elementRelativeToViewport: DOMRect =
        elementRef.current.getBoundingClientRect();
      const titleRelativeToViewport: DOMRect =
        titleRef.current.getBoundingClientRect();

      const viewportHeight: number = window.innerHeight;
      const scrollThresholdInPixels: number =
        (thresholdPercentage / 100) * viewportHeight;
      const secondScrollThresholdInPixels: number =
        (secondThresholdPercentage / 100) * viewportHeight;
      const titleScrollThresholdInPixels: number =
        (titleThresholdPercentage / 100) * viewportHeight;

      const didItScrollPastTheThreshold: boolean =
        elementRelativeToViewport.top < scrollThresholdInPixels;

      const secondDidItScrollPastTheThreshold: boolean =
        elementRelativeToViewport.top < secondScrollThresholdInPixels;

      const titleDidItScrollPastTheThreshold: boolean =
        titleRelativeToViewport.top + titleRelativeToViewport.height / 2 <
        titleScrollThresholdInPixels;

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

      if (titleDidItScrollPastTheThreshold) {
        setTitleScrolledPast(true);
      } else {
        setTitleScrolledPast(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowDrawer = (): void => setShowDrawer(true);

  return (
    <body
      className="text-xl font-body text-brandBlack"
      style={{
        backgroundColor: scrolledPast
          ? bodyColors["styleTwo"]
          : bodyColors["styleOne"],
      }}
    >
      {showDrawer && (
        <BookASessionDrawer
          formattedDate={formattedDate}
          differenceInHours={differenceInHours}
          parsedData={parsedData}
        />
      )}
      <main
        className="transition-colors  duration-500"
        style={{
          backgroundColor: scrolledPast
            ? bgColors["styleTwo"]
            : bgColors["styleOne"],
        }}
      >
        <img
          className="fixed -z-1 left-0 right-0 top-0 transition-opacity duration-500"
          style={{
            opacity: scrolledPast
              ? imageOpacities["styleTwo"]
              : imageOpacities["styleOne"],
          }}
          src={parsedData.image}
        />
        <div className="flex flex-col relative">
          <div className="fixed left-0 bottom-0 right-0 flex p-5 z-10">
            <button
              onClick={handleShowDrawer}
              className="flex w-full transition-colors duration-500 relative rounded-full "
              style={scrolledPast ? CTABGStyleTwo : CTABGStyleOne}
            >
              <div
                className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center font-medium z-50"
                style={{
                  color: scrolledPast
                    ? CTATextColors.styleTwo
                    : CTATextColors.styleOne,
                }}
              >
                Book a Session
              </div>
              <svg
                width="23"
                height="56"
                viewBox="0 0 23 56"
                fill="currentColor"
                className="min-h-14 min-w-[1.4375rem] aspect-[23/56]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 22.54V33.46C0 41.4329 0 45.4193 1.57621 48.4536C2.90447 51.0106 4.98935 53.0955 7.54636 54.4238C10.5807 56 15.0271 56 23 56L23 0C15.0271 0 10.5807 0 7.54636 1.57621C4.98935 2.90447 2.90447 4.98935 1.57621 7.54636C0 10.5807 0 14.5671 0 22.54Z" />
              </svg>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 195 56"
                fill="currentColor"
                className="max-h-14 h-14 w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="195" height="56" />
              </svg>
              <svg
                width="23"
                height="56"
                viewBox="0 0 23 56"
                fill="currentColor"
                className="min-h-14 min-w-[1.4375rem] aspect-[23/56]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 22.54V33.46C23 41.4329 23 45.4193 21.4238 48.4536C20.0955 51.0106 18.0106 53.0955 15.4536 54.4238C12.4193 56 7.97287 56 0 56L1.52588e-05 0C7.97289 0 12.4193 0 15.4536 1.57621C18.0106 2.90447 20.0955 4.98935 21.4238 7.54636C23 10.5807 23 14.5671 23 22.54Z" />
              </svg>
            </button>
            <ColorChangingGradient
              color={
                scrolledPast
                  ? "var(--Brand-White)"
                  : "rgb(" + dominantColor + ")"
              }
              className="absolute left-0 right-0 bottom-0 top-0 z-[-1]"
            />
          </div>
          <div className="fixed z-10 left-0 right-0 top-0 flex justify-between px-5 py-4">
            <Link href="/" className="relative flex items-center gap-2">
              <IconBackArrow
                color={
                  scrolledPast ? iconColors["styleTwo"] : iconColors["styleOne"]
                }
              />
              <span
                className={
                  "leading-none font-medium transition-transform " +
                  (titleScrolledPast
                    ? " translate-y-2 opacity-0 "
                    : " translate-y-0 opacity-100 ")
                }
              >
                <span
                  className="transition-colors duration-500"
                  style={{
                    color: scrolledPast
                      ? iconColors["styleTwo"]
                      : iconColors["styleOne"],
                  }}
                >
                  Home
                </span>
              </span>
            </Link>

            <div className="flex -mt-[0.15rem]">
              <UserSessionsCountButton
                color={
                  scrolledPast ? iconColors["styleTwo"] : iconColors["styleOne"]
                }
              />
            </div>

            <div
              className={
                "absolute z-10 top-[1.125rem] left-16 right-20 bottom-0 flex justify-center duration-300 transition-transform " +
                (titleScrolledPast
                  ? " translate-y-0 opacity-100"
                  : " -translate-y-2 opacity-0 max-w-0")
              }
            >
              <span className="truncate font-medium leading-none">
                {parsedData.name}
              </span>
            </div>
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
            className="bg-brandWhite px-5 pb-12 transition-colors duration-500"
            ref={elementRef}
            style={scrolledPast ? componentStyleTwo : componentStyleOne}
          >
            <div className="flex flex-col gap-9 -mt-12">
              <div className="flex flex-col gap-5">
                <div className="flex gap-1 text-base ">
                  <Link href={"/"}> Home </Link>
                  {"/"}
                  <Link className="truncate" href={"/event/" + parsedData.id}>
                    {parsedData.name}
                  </Link>
                </div>
                <span
                  className={
                    "text-4xl transition-transform duration-300 relative " +
                    (titleScrolledPast
                      ? " opacity-0 -translate-y-4 "
                      : " opacity-100 translate-y-0")
                  }
                  ref={titleRef}
                >
                  {parsedData.name}
                </span>
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
            className="transition-colors duration-500"
            style={scrolledPast ? componentStyleTwo : componentStyleOne}
          >
            {otherEventHTML}
          </div>
        </div>
      </main>
    </body>
  );
}
