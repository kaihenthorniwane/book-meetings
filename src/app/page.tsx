"use client";

import { useEffect, useState } from "react";
import { Event } from "@/context/user-sessions-context";
import Link from "next/link";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/get-events");
      const parsedData = await data.json();
      setEvents(parsedData);
    }
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4">
        <span className="font-semibold">This is a temporary homepage</span>
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
    </DefaultLayout>
  );
}
