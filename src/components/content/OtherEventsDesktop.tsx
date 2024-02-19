import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";
import ColorChangingGradient from "./ColorChangingGradient";

export default function OtherEventsDesktop({
  prevEventItem,
  nextEventItem,
  color = "#FFFFFF",
}: {
  prevEventItem: Event;
  nextEventItem: Event;
  color?: string;
}) {
  return (
    <div className="flex gap-10 mb-10">
      <Link
        href={"/event/" + prevEventItem.id}
        className="flex flex-col gap-5 relative"
      >
        <div className="max-h-44 overflow-hidden relative">
          <img
            className="relative mix-blend-luminosity opacity-25"
            src={prevEventItem.image}
          />
        </div>
        <div className="flex flex-col gap-2 absolute top-0 left-0 right-0 bottom-0 justify-end p-5 z-[2]">
          <span className="font-medium">Prev Event</span>
          <span className="text-3xl">{prevEventItem.name}</span>
        </div>
      </Link>
      <Link
        href={"/event/" + nextEventItem.id}
        className="flex flex-col gap-5 relative"
      >
        <div className="max-h-44 overflow-hidden relative">
          <img
            className="relative mix-blend-luminosity opacity-25"
            src={nextEventItem.image}
          />
        </div>
        <div className="flex flex-col gap-2 absolute top-0 left-0 right-0 bottom-0 justify-end p-5 z-[2]">
          <span className="font-medium">Next Event</span>
          <span className="text-3xl">{nextEventItem.name}</span>
        </div>
      </Link>
    </div>
  );
}
