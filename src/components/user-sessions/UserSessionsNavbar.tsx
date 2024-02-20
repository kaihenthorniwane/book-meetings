import Link from "next/link";
import IconBackArrow from "../icons/IconBackArrow";
import UserSessionsCountButton from "./UserSessionsCountButton";

export default function UserSessionsNavbar({
  color = "var(--Brand-Black)",
}: {
  color?: string;
}) {
  return (
    <div
      className="w-full flex justify-center px-10 mb-7"
      style={{ color: color }}
    >
      <div className="flex items-center justify-between font-medium w-full max-w-screen-xl py-7">
        <Link href={"/"} className="flex gap-2 items-center">
          <IconBackArrow color={color} />
          <span>Home</span>
        </Link>

        <UserSessionsCountButton variant="desktop" color={color} />
      </div>
    </div>
  );
}
