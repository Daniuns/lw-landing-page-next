import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundGoldenGradient: "var(--linear-golden-gradient)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        goldenGradient: "linear-gradient(0deg, #faeaca 0%, #efcfa4 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
