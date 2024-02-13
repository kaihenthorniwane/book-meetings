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
      <img src={eventItem.image} />
    </Link>
  );
}
