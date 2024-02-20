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
  const { componentStyleOne, bgColors, iconColors } = themeStyleOptions;

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
