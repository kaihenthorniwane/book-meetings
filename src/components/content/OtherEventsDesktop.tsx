import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";

export default function OtherEventsDesktop({
  prevEventItem,
  nextEventItem,
}: {
  prevEventItem: Event;
  nextEventItem: Event;
}) {
  return (
    <div className="flex gap-10">
      <Link href={"/event/" + prevEventItem.id} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 ">
          <span className="font-medium">Prev Event</span>
          <span className="text-3xl">{prevEventItem.name}</span>
        </div>
        <div className="max-h-32 overflow-hidden relative">
          <div className="absolute z-10 left-0 top-0 right-0 bottom-0" />
          <img className="relative" src={prevEventItem.image} />
        </div>
      </Link>
      <Link href={"/event/" + nextEventItem.id} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 ">
          <span className="font-medium">Next Event</span>
          <span className="text-3xl">{nextEventItem.name}</span>
        </div>
        <div className="max-h-32 overflow-hidden relative">
          <div className="absolute z-10  left-0 top-0 right-0 bottom-0" />
          <img className="relative" src={nextEventItem.image} />
        </div>
      </Link>
    </div>
  );
}
