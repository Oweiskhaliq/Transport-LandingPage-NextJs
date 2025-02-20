import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "serif"], // Add PT Serif
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        golden_brown: "#a27836",
        dark_blue:"#061138",
        light_blue: "#373f5b"
      },
    },
  },
  plugins: [],
} satisfies Config;
