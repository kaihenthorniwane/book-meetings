import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";
import ColorChangingGradient from "./ColorChangingGradient";

export default function OtherEventsDesktop({
  prevEventItem,
  nextEventItem,
}: {
  prevEventItem: Event;
  nextEventItem: Event;
}) {
  return (
    <div className="flex flex-col md:p-0 md:flex-row md:gap-2 gap-5 mb-10 p-5">
      <Link
        href={"/event/" + prevEventItem.id}
        className="flex flex-col gap-5 relative md:rounded-r-lg md:rounded-l-[2rem] rounded-3xl overflow-hidden"
      >
        <div className="md:max-h-44 max-h-56 overflow-hidden relative">
          <img
            className="relative mix-blend-luminosity opacity-25"
            src={prevEventItem.image}
          />
        </div>
        <div className="flex flex-col gap-2 absolute top-0 left-0 right-0 bottom-0 justify-end md:py-6 md:px-8 py-5 px-7 z-[2]">
          <span className="font-medium">Prev Event</span>
          <span className="text-3xl">{prevEventItem.name}</span>
        </div>
      </Link>
      <Link
        href={"/event/" + nextEventItem.id}
        className="flex flex-col gap-5 relative md:rounded-l-lg md:rounded-r-[2rem] rounded-3xl overflow-hidden text-right"
      >
        <div className="md:max-h-44 max-h-56 overflow-hidden relative">
          <img
            className="relative mix-blend-luminosity opacity-25"
            src={nextEventItem.image}
          />
        </div>
        <div className="flex flex-col gap-2 absolute top-0 left-0 right-0 bottom-0 justify-end md:py-6 md:px-8 py-5 px-7 z-[2]">
          <span className="font-medium">Next Event</span>
          <span className="text-3xl">{nextEventItem.name}</span>
        </div>
      </Link>
    </div>
  );
}
