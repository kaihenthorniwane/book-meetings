"use client";

import { useEffect, useState } from "react";
import { Event } from "@/context/user-sessions-context";

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
    <>
      {events.map((event) => (
        <div key={event.id}>
          <div>{event.name}</div>
          <div>{event.tagline}</div>
        </div>
      ))}
    </>
  );
}
