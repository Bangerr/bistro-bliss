import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    screens: {
      xs: "640px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: colors.green,
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
};
