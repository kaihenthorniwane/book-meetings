import { Event } from "@/context/user-sessions-context";
import Link from "next/link";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { getEvents } from "@/store/dataStore";

export default function Home() {
  const events: Event[] = getEvents();

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-4xl">Available Mentoring Sessions</span>
          <span className="max-w-screen-md">
            From an one-on-one introduction to React&apos;s basics all the way
            up to a deep dive into state mechanics - we got just the right
            session for you!
          </span>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10 flex flex-col gap-10">
          {events.map((event) => (
            <div key={event.id}>
              <Link href={"/event/" + event.id}>
                <div className="flex flex-col gap-5">
                  <div className="overflow-hidden h-32">
                    <img src={event.image} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl">{event.name}</span>
                    <span>{event.tagline}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
