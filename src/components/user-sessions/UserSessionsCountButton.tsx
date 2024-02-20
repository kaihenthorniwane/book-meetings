import UserEventCalendarIcon from "./UserEventCalendarIcon";

export default function UserSessionsCountButton({
  color = "var(--Brand-Black)",
}: {
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <UserEventCalendarIcon color={color} />
      <span
        className="leading-none font-medium transition-colors duration-500"
        style={{ color: color }}
      >
        2
      </span>
    </div>
  );
}
