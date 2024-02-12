import IconCalendarSmall from "@/components/icons/IconCalendarSmall";
import IconClockSmall from "@/components/icons/IconClockSmall";
import { type Event, type EventTime } from "@/context/user-sessions-context";
import { getEventUsingID } from "@/store/dataStore";

export default async function Page({ params }: { params: { id: string } }) {
  const eventData = getEventUsingID(params.id);
  if ("error" in eventData) {
    return <>An error occured</>;
  }
  const parsedData: Event = eventData;

  const date: Date = new Date(parsedData.date);
  const formattedDate: string = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function convertDecimalHoursToReadableTime(decimalHours: number): string {
    const hours: number = Math.floor(decimalHours);
    const minutes: number = Math.round((decimalHours - hours) * 60);
    let readableTime: string = "";

    if (hours > 0) readableTime += `${hours} hour${hours > 1 ? "s" : ""} `;
    if (minutes > 0 && hours > 0) readableTime += `${minutes} min`;
    else if (minutes > 0) readableTime += `${minutes} minutes`;

    return readableTime.trim() || "0 minutes";
  }

  const times: EventTime[] = parsedData.times;
  const firstTime: EventTime = times[0];
  const startTime: Date = new Date(firstTime.start);
  const endTime: Date = new Date(firstTime.end);
  const differenceInMilliseconds: number =
    endTime.getTime() - startTime.getTime();
  const differenceInHours: string = convertDecimalHoursToReadableTime(
    differenceInMilliseconds / (1000 * 60 * 60)
  );

  return (
    <>
      <img
        className="fixed z-[-1] left-0 right-0 top-0"
        src={parsedData.image}
      />
      <div className="flex flex-col">
        <div className="aspect-square flex flex-col justify-end">
          <div className="bg-event-page-gradient h-36" />
        </div>
        <div className="bg-brandWhite px-5">
          <div className="flex flex-col gap-9 -mt-12">
            <div className="flex flex-col gap-5">
              <div className="text-4xl">{parsedData.name}</div>
              <div className="flex gap-3 font-medium">
                <div className="flex gap-2 items-center leading-none">
                  <IconCalendarSmall />
                  <div className="pt-0.5">{formattedDate}</div>
                </div>
                <div className="flex gap-2 items-center leading-none">
                  <IconClockSmall />
                  <div className="pt-0.5">{differenceInHours}</div>
                </div>
              </div>
            </div>
            <div>{parsedData.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
