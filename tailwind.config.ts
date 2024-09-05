import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': { 'background-size': '100%' },
          '50%': { 'background-size': '105%' },
        },
      },
      animation: {
        zoom: 'zoom 50s ease-in-out infinite',
      },
    },
    screens:{
      'sm': '800px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
