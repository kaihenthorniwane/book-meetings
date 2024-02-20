import Link from "next/link";
import ColorChangingGradient from "../content/ColorChangingGradient";
import IconBackArrow from "../icons/IconBackArrow";
import UserSessionsCountButton from "./UserSessionsCountButton";

export default function UserSessionsNavbar({
  color = "var(--Brand-Black)",
  bgColor = "var(--Brand-White)",
  variant = "sticky",
}: {
  color?: string;
  bgColor?: string;
  variant?: "sticky" | "fixed";
}) {
  return (
    <div
      className={
        "z-10 w-full top-0 flex justify-center md:px-10 md:py-0 px-5 py-3 mb-7 " +
        (variant === "sticky" ? " sticky" : " fixed left-0 right-0")
      }
      style={{ color: color }}
    >
      <div
        className={
          "flex items-center font-medium w-full max-w-screen-xl md:py-7 " +
          (variant === "sticky" ? " justify-between" : " justify-end")
        }
      >
        <Link
          href={"/"}
          className={
            "flex gap-2 items-center" +
            (variant === "sticky" ? "" : " invisible")
          }
        >
          <IconBackArrow color={color} />
          <span>Home</span>
        </Link>

        <UserSessionsCountButton variant="desktop" color={color} />
      </div>
      <ColorChangingGradient
        color={bgColor}
        className="absolute -z-10 top-0 left-0 right-0 rotate-180 h-24 w-full"
      />
    </div>
  );
}
