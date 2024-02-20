import UserEventCalendarIcon from "./UserEventCalendarIcon";

export default function UserSessionsCountButton({
  color = "var(--Brand-Black)",
  variant = "mobile",
}: {
  color?: string;
  variant?: "mobile" | "desktop";
}) {
  return (
    <div className="flex items-center gap-2">
      <UserEventCalendarIcon color={color} />
      <span
        className="leading-none font-medium transition-colors duration-500"
        style={{ color: color }}
      >
        {"2" + (variant === "desktop" ? " upcoming sessions" : "")}
      </span>
    </div>
  );
}
