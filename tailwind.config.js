/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#071f6d",

        secondary: "#efb1e4",

        accent: "#e85f73",

        neutral: "#2e3038",

        "base-100": "#faf4fa",

        info: "#647cf7",

        success: "#6fdca0",

        warning: "#f6bc6a",

        error: "#f51432",
      },
    },
  ],
  plugins: [require("daisyui")],
};
