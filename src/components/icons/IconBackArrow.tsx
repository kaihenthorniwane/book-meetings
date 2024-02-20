import { ComponentPropsWithoutRef } from "react";

type IconBackArrowProps = {
  className?: string;
  color?: string;
} & ComponentPropsWithoutRef<"svg">;

export default function IconBackArrow({
  color = "var(--Brand-Black)",
  className = "transition-colors duration-500",
  ...props
}: IconBackArrowProps) {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      className={className}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 11L11 21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 11H25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
