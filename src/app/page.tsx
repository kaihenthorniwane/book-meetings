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
            From an one-on-one introduction to React's basics all the way up to
            a deep dive into state mechanics - we got just the right session for
            you!
          </span>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10 flex flex-col gap-5">
          {events.map((event) => (
            <div key={event.id}>
              <div>{event.name}</div>
              <div>{event.tagline}</div>
              <Link className="underline" href={"/event/" + event.id}>
                Page
              </Link>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
