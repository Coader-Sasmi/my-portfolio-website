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
        primary: "#ffe92f", //  yellow
        secondary: "#cc8b6a", //light pink
        tertiary: "#9ca3af", //light gray
      },
    },
  },
  plugins: [],
};
export default config;
