import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        default: "#0F62C1",
        variant: "#C9CED4",
      },
      fontFamily: {
        nunito: ["var(--font-nunito-sans)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
