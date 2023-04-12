import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#427c82",
        secondary: "#f97316",
      },
      gridTemplateRows: {
        "main-layout": "auto 1fr auto",
        logo: "1fr auto",
      },
    },
  },
  plugins: [],
} satisfies Config;
