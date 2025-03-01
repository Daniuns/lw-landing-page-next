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
        backgroundBlueGradient: "var(--linear-blue-gradient)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        lightGolden: "var(--lightGolden)",
        blue: {
          "100": "var(--blue-100)",
        },
      },
      backgroundImage: {
        goldenGradient: "linear-gradient(0deg, #faeaca 0%, #efcfa4 100%)",
        blueGradient: "linear-gradient(0deg, #9BB6B3 0%, #5F888A 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
