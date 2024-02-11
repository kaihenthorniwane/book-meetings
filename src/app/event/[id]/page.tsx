import { Event } from "@/context/user-sessions-context";

export default async function Page({ params }: { params: { id: string } }) {
  const eventData = await fetch(
    process.env.URL + "/api/get-event-by-id/?id=" + params.id
  );
  const parsedData: Event = await eventData.json();
  return (
    <div className="flex flex-col gap-5">
      <img src={parsedData.image} />
      <div>{parsedData.name}</div>
    </div>
  );
}
