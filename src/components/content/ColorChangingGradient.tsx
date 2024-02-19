export default function ColorChangingGradient({
  color = "var(--Brand-White)",
  className = "w-full h-36",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 375 148"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_244_5573"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="375"
        height="148"
      >
        <path
          d="M375 148L0 148L1.29386e-05 -7.03433e-06L375 2.57492e-05L375 148Z"
          fill="url(#paint0_linear_244_5573)"
        />
      </mask>
      <g mask="url(#mask0_244_5573)" className="w-full">
        <path
          d="M375 148L0 148L1.29386e-05 -7.03433e-06L375 2.57492e-05L375 148Z"
          className="transition-colors duration-700"
          fill={color}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_244_5573"
          x1="187.5"
          y1="148"
          x2="187.5"
          y2="1.41258e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.485" stopOpacity="0.744466" />
          <stop offset="0.74" stopOpacity="0.485" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
