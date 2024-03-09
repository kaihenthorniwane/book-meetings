import {
  useUserSessionsContext,
  type EventInfo,
} from "@/context/user-sessions-context";
import { type FormEvent } from "react";
import IconCalendarSmall from "../icons/IconCalendarSmall";
import IconClockSmall from "../icons/IconClockSmall";

type BookASessionDrawerProps = {
  formattedDate: string;
  differenceInHours: string;
  parsedData: EventInfo;
  handleShowDrawer: () => void;
};

export default function BookASessionDrawer({
  formattedDate,
  differenceInHours,
  parsedData,
  handleShowDrawer,
}: BookASessionDrawerProps) {
  const userEventsContextValue = useUserSessionsContext();

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as {
      sessionTime: string;
      registeredName: string;
      registeredEmail: string;
    };
    const eventID: string = parsedData.id;
    const timeID: string = parsedData.times[parseInt(data.sessionTime)].id;
    userEventsContextValue.addEventByID({ eventID: eventID, timeID: timeID });
    handleShowDrawer();
  }

  return (
    <div
      className="fixed left-0 right-0 bottom-0 top-0 z-[100] flex flex-col justify-end md:justify-center md:items-center bg-[rgba(0,0,0,0.5)]"
      onClick={handleShowDrawer}
    >
      <form
        onSubmit={handleForm}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" flex flex-col px-5 pt-7 pb-5 bg-brandWhite rounded-t-3xl gap-7 text-brandBlack z-[200] md:max-w-xl md:rounded-4xl md:w-full"
      >
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
        <div className="flex flex-col gap-3">
          <span className="text-2.5xl font-medium">Select Time</span>
          <div className="flex flex-col gap-2">
            {parsedData.times.map((time, index) => (
              <label
                key={"time-option-" + index}
                className="flex items-center font-medium gap-2"
              >
                <div className="w-7 h-7 relative">
                  <input
                    type="radio"
                    value={index}
                    required
                    name="sessionTime"
                    className="appearance-none peer"
                  />
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="absolute left-0 top-0 right-0 bottom-0 peer-checked:fill-brandBlack"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13.25C1 8.33438 1 5.87657 2.17971 4.11101C2.69042 3.34668 3.34668 2.69042 4.11101 2.17971C5.87657 1 8.33438 1 13.25 1H14.75C19.6656 1 22.1234 1 23.889 2.17971C24.6533 2.69042 25.3096 3.34668 25.8203 4.11101C27 5.87657 27 8.33438 27 13.25V14.75C27 19.6656 27 22.1234 25.8203 23.889C25.3096 24.6533 24.6533 25.3096 23.889 25.8203C22.1234 27 19.6656 27 14.75 27H13.25C8.33438 27 5.87657 27 4.11101 25.8203C3.34668 25.3096 2.69042 24.6533 2.17971 23.889C1 22.1234 1 19.6656 1 14.75V13.25Z"
                      stroke="#19154B"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span>
                  {new Date(time.start).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}{" "}
                  -{" "}
                  {new Date(time.end).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2.5xl font-medium">Information</span>
          <input
            type="text"
            name="registeredName"
            required
            placeholder="Write name here"
            className="outline-none py-2 border-b-1 border-transparent focus:border-brandBlack"
          />
          <input
            type="email"
            name="registeredEmail"
            required
            placeholder="Write email here"
            className="outline-none py-2 border-b-1 border-transparent focus:border-brandBlack"
          />
        </div>

        <label className="flex w-full transition-colors duration-500 relative rounded-full bg-brandBlack text-brandBlack">
          <input
            type="submit"
            className="opacity-0 absolute left-0 top-0 right-0 bottom-0 z-[100]  cursor-pointer"
          />
          <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center font-medium z-50 text-brandWhite">
            Confirm Booking
          </div>
          <svg
            width="23"
            height="56"
            viewBox="0 0 23 56"
            fill="currentColor"
            className="min-h-14 min-w-[1.4375rem] aspect-[23/56]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 22.54V33.46C0 41.4329 0 45.4193 1.57621 48.4536C2.90447 51.0106 4.98935 53.0955 7.54636 54.4238C10.5807 56 15.0271 56 23 56L23 0C15.0271 0 10.5807 0 7.54636 1.57621C4.98935 2.90447 2.90447 4.98935 1.57621 7.54636C0 10.5807 0 14.5671 0 22.54Z" />
          </svg>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 195 56"
            fill="currentColor"
            className="max-h-14 h-14 w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="195" height="56" />
          </svg>
          <svg
            width="23"
            height="56"
            viewBox="0 0 23 56"
            fill="currentColor"
            className="min-h-14 min-w-[1.4375rem] aspect-[23/56]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 22.54V33.46C23 41.4329 23 45.4193 21.4238 48.4536C20.0955 51.0106 18.0106 53.0955 15.4536 54.4238C12.4193 56 7.97287 56 0 56L1.52588e-05 0C7.97289 0 12.4193 0 15.4536 1.57621C18.0106 2.90447 20.0955 4.98935 21.4238 7.54636C23 10.5807 23 14.5671 23 22.54Z" />
          </svg>
        </label>
      </form>
    </div>
  );
}
