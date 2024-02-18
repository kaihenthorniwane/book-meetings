"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import IconBackArrow from "../icons/IconBackArrow";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";
import ColorChangingGradient from "./ColorChangingGradient";
import { type EventContentProps } from "./EventContent";
import TopWhiteGradient from "./TopWhiteGradient";

export default function EventContentDesktop({
  parsedData,
  descriptionArray,
  formattedDate,
  differenceInHours,
  dominantColor,
  themeStyleOptions,
  otherEventHTML,
}: EventContentProps) {
  const {
    componentStyleOne,
    componentStyleTwo,
    bgColors,
    bodyColors,
    imageOpacities,
    gradientOpacities,
    iconColors,
  } = themeStyleOptions;

  return (
    <body
      className="text-xl flex flex-col items-center font-body text-brandBlack"
      style={{
        backgroundColor: bgColors["styleOne"],
      }}
    >
      <main
        className="max-w-screen-xl transition-colors grid grid-cols-2 gap-10 mt-20 mx-5"
        style={{
          backgroundColor: bgColors["styleOne"],
        }}
      >
        <img className="transition-opacity" src={parsedData.image} />
        <div className="flex flex-col relative">
          <div
            className="bg-brandWhite transition-colors"
            style={componentStyleOne}
          >
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-5">
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
      </main>
    </body>
  );
}
