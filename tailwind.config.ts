import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-/
    }
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      mr: ["var(--font-mr)"],
      in: ["var(--font-in)"]
    }
  },
  plugins: [],
};
export default config;
