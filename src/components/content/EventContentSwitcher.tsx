"use client";

import { type ReactNode, useEffect, useState } from "react";
import EventContent, { type EventContentProps } from "./EventContent";
import EventContentDesktop from "./EventContentDesktop";

export default function EventContentSwitcher({
  nextAndPrevEventHTML,
  ...props
}: EventContentProps & { nextAndPrevEventHTML: ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <EventContent {...props} otherEventHTML={nextAndPrevEventHTML} />
      ) : (
        <EventContentDesktop {...props} otherEventHTML={nextAndPrevEventHTML} />
      )}
    </>
  );
}
