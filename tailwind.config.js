/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0f1117",
        cardBg: "#161b22",
        borderDark: "#30363d",
        accentBlue: "#3b82f6", // Royal blue accent
        darkBlueAccent: "#1e40af",
      },
    },
  },
  plugins: [],
};