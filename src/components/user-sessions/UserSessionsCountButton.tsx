import { useUserSessionsContext } from "@/context/user-sessions-context";
import UserEventCalendarIcon from "./UserEventCalendarIcon";

export default function UserSessionsCountButton({
  color = "var(--Brand-Black)",
  variant = "mobile",
}: {
  color?: string;
  variant?: "mobile" | "desktop";
}) {
  const userEventsContextValue = useUserSessionsContext();

  return (
    <button className="flex items-center gap-2">
      <UserEventCalendarIcon color={color} />
      <span
        className="leading-none flex gap-1 font-medium transition-colors duration-500"
        style={{ color: color }}
      >
        <span>{userEventsContextValue.eventReferences.length}</span>
        <span className="md:block hidden"> upcoming sessions</span>
      </span>
    </button>
  );
}
