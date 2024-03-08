"use client";

import Link from "next/link";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";
import UserSessionsNavbar from "../user-sessions/UserSessionsNavbar";
import { type EventContentProps } from "./EventContent";

export default function EventContentDesktop({
  parsedData,
  descriptionArray,
  formattedDate,
  differenceInHours,
  themeStyleOptions,
  otherEventHTML,
}: EventContentProps) {
  const {
    componentStyleOne,
    bgColors,
    iconColors,
    CTABGStyleOne,
    CTATextColors,
  } = themeStyleOptions;

  return (
    <body
      className="text-xl flex flex-col items-center font-body text-brandBlack"
      style={{
        backgroundColor: bgColors["styleOne"],
      }}
    >
      <UserSessionsNavbar
        color={componentStyleOne.color}
        bgColor={componentStyleOne.backgroundColor}
      />
      <main
        className="max-w-screen-xl transition-colors mx-10 flex flex-col gap-16"
        style={componentStyleOne}
      >
        <div className=" grid grid-cols-2 gap-10">
          <img className="transition-opacity" src={parsedData.image} />
          <div
            className="bg-brandWhite transition-colors"
            style={componentStyleOne}
          >
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-5">
                <div className="flex gap-1.5 text-base">
                  <Link href={"/"}> Home </Link>
                  {"/"}
                  <Link href={"/event/" + parsedData.id}>
                    {parsedData.name}
                  </Link>
                </div>
                <span className="text-4xl">{parsedData.name}</span>
                <div className="flex gap-4 font-medium">
                  <div className="flex gap-2 items-center leading-none">
                    <IconCalendarSmall color={iconColors["styleOne"]} />
                    <div>{formattedDate}</div>
                  </div>
                  <div className="flex gap-2 items-center leading-none">
                    <IconClockSmall color={iconColors["styleOne"]} />
                    <div>{differenceInHours}</div>
                  </div>
                </div>
              </div>
              <button
                className="flex w-full max-w-80 transition-colors duration-500 relative rounded-full "
                style={CTABGStyleOne}
              >
                <div
                  className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center font-medium z-50"
                  style={{ color: CTATextColors.styleOne }}
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
              <div className="flex flex-col gap-1">
                {descriptionArray.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph.text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {otherEventHTML}
      </main>
    </body>
  );
}
