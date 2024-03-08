import { EventInfo } from "@/context/user-sessions-context";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";

type BookASessionDrawerProps = {
  formattedDate: string;
  differenceInHours: string;
  parsedData: EventInfo;
};

export default function BookASessionDrawer({
  formattedDate,
  differenceInHours,
  parsedData,
}: BookASessionDrawerProps) {
  return (
    <div className="fixed left-0 right-0 bottom-0 flex flex-col px-5 py-7 bg-brandWhite rounded-t-3xl gap-7 text-brandBlack z-50">
      <div className="flex flex-col gap-3">
        <span className="text-4xl">Book A Session</span>
        <div className="flex gap-4 font-medium">
          <div className="flex gap-2 items-center leading-none">
            <IconCalendarSmall />
            <div>{formattedDate}</div>
          </div>
          <div className="flex gap-2 items-center leading-none">
            <IconClockSmall />
            <div>{differenceInHours}</div>
          </div>
        </div>
      </div>
      <div>
        <span className="text-2.5xl font-medium">Select Time</span>
      </div>
    </div>
  );
}
