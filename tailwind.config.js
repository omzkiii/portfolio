/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat"],
    },
    colors: {
      tokyonight: {
        base00: "#1a1b26",
        base01: "#24283b",
        base02: "#414868",
        base03: "#565f89",
        base04: "#cfc9c2",
        base05: "#9aa5ce",
        base06: "#a9b1d6",
        base07: "#c0caf5",
        base08: "#f7768e",
        base09: "#ff9e64",
        base0A: "#e0af68",
        base0B: "#9ece6a",
        base0C: "#73daca",
        base0D: "#2ac3de",
        base0E: "#7dcfff",
        base0F: "#7aa2f7",
      },
    },
  },
  plugins: [],
};
