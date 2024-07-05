import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: '#C1D5F0',
      primaryDark: '#225190',
      secondary: '#E6D1F2',
      secondaryDark: '#67278b',
      tertiary: '#F8F1AE',
      tertiaryDark: '#a5960e',
    }
  },
  plugins: [],
};
export default config;
