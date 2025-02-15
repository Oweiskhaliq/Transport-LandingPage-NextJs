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
        custom_color: "#b8925b",
        form_btn_colour:"#061138",
        form_btn_hover: "#373f5b"
      },
    },
  },
  plugins: [],
} satisfies Config;
