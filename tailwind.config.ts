import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brandBlack: "var(--Brand-Black)",
      brandWhite: "var(--Brand-White)",
    },
    extend: {
      fontSize: {
        "2.5xl": "1.75rem",
      },
      fontFamily: {
        body: ["indivisible", "sans-serif"],
      },
      backgroundImage: {
        "event-page-gradient":
          "linear-gradient(0deg, rgba(var(--Brand-White-RGB), 1) 0%, rgba(var(--Brand-White-RGB), 0.744466) 48.5%, rgba(var(--Brand-White-RGB), 0.485) 74%, rgba(var(--Brand-White-RGB), 0) 100%)",
      },
    },
  },
};
export default config;
