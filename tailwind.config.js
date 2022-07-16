module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  mode: "jit",
  theme: {
    colors: {
      primary: "#69e228",
      secondary: "#F1E7E4",
      background: "#1e293b",
      midgrey: "#1B1F22",
      hover: "#47A216",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
