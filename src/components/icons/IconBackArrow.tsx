export default function IconBackArrow({
  color = "var(--Brand-Black)",
}: {
  color?: string;
}) {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      className="transition-colors duration-700"
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
