import { type Event } from "@/context/user-sessions-context";
import Link from "next/link";

export default function OtherEvents({ eventItem }: { eventItem: Event }) {
  return (
    <Link href={"/event/" + eventItem.id} className="flex flex-col ">
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-1">
          <span className="font-medium">Next Event</span>
          <span className="text-3xl">{eventItem.name}</span>
        </div>
        <div className="max-h-48 overflow-hidden relative">
          <img className="relative" src={eventItem.image} />
        </div>
      </div>
    </Link>
  );
}
