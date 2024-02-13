import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";

export default function OtherEvents({ eventItem }: { eventItem: Event }) {
  return (
    <Link
      href={"/event/" + eventItem.id}
      className="flex flex-col bg-brandWhite"
    >
      <div className="flex flex-col gap-2 p-5">
        <span className="font-medium">Next Event</span>
        <span className="text-3xl">{eventItem.name}</span>
      </div>
      <div className="max-h-32 overflow-hidden relative">
        <div className="absolute z-10 bg-event-page-gradient left-0 top-0 right-0 bottom-0" />
        <img className="relative" src={eventItem.image} />
      </div>
    </Link>
  );
}
