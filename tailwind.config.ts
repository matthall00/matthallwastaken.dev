import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        sand: "#F4D7A1",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      transitionTimingFunction: {
        pleasant: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;

