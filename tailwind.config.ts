import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F4D94C",
          blue: "#085E9D",
          green: "#007A3F",
          orange: "#DB5F31",
          purple: "#605DC8"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(8, 94, 157, 0.35)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
