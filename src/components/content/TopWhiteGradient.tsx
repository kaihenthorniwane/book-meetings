export default function TopWhiteGradient({
  opacity = "1",
}: {
  opacity?: string;
}) {
  return (
    <svg
      className="fixed w-full -z-10 top-0 left-0 right-0 h-20 transition-opacity duration-700"
      viewBox="0 0 375 57"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: opacity }}
    >
      <rect width="375" height="57" fill="url(#paint0_linear_264_466)" />
      <defs>
        <linearGradient
          id="paint0_linear_264_466"
          x1="187.5"
          y1="0"
          x2="187.5"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--Brand-White)" />
          <stop offset="0.545" stopColor="var(--Brand-White)" />
          <stop
            offset="0.87"
            stopColor="var(--Brand-White)"
            stopOpacity="0.505495"
          />
          <stop offset="1" stopColor="var(--Brand-White)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
