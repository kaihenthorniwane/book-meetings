import { getEvents } from "@/store/dataStore";

export async function GET() {
  const data = getEvents();
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
