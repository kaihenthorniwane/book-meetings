export default function IconCalendarSmall({
  color = "var(--Brand-Black)",
}: {
  color?: string;
}) {
  return (
    <svg
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      className="-mt-0.5"
    >
      <path
        d="M16 7.8H1M11.8333 1V4.4M5.16667 1V4.4M5 18H12C13.4001 18 14.1002 18 14.635 17.7221C15.1054 17.4776 15.4878 17.0875 15.7275 16.6077C16 16.0622 16 15.3481 16 13.92V6.78C16 5.35187 16 4.6378 15.7275 4.09232C15.4878 3.61251 15.1054 3.22241 14.635 2.97793C14.1002 2.7 13.4001 2.7 12 2.7H5C3.59987 2.7 2.8998 2.7 2.36502 2.97793C1.89462 3.22241 1.51217 3.61251 1.27248 4.09232C1 4.6378 1 5.35187 1 6.78V13.92C1 15.3481 1 16.0622 1.27248 16.6077C1.51217 17.0875 1.89462 17.4776 2.36502 17.7221C2.8998 18 3.59987 18 5 18Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
