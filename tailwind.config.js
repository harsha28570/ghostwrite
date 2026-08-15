/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base Backgrounds
        background: {
          DEFAULT: "#1A1A1A", // Main charcoal
          deep: "#0F0F0F", // Deeper black
          card: "#242424", // Elevated cards
          hover: "#2D2D2D", // Hover states
        },

        // Text (Cream White)
        text: {
          primary: "#F5F1E8", // Main cream
          secondary: "rgba(245, 241, 232, 0.7)",
          muted: "rgba(245, 241, 232, 0.5)",
          subtle: "rgba(245, 241, 232, 0.3)",
        },

        // Borders
        border: {
          DEFAULT: "rgba(245, 241, 232, 0.1)",
          hover: "rgba(245, 241, 232, 0.2)",
        },

        // PRIMARY ACCENT: Crimson Red
        accent: {
          DEFAULT: "#DC2626",
          hover: "#B91C1C",
          light: "#EF4444",
          soft: "rgba(220, 38, 38, 0.08)",
          glow: "rgba(220, 38, 38, 0.15)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        // Optional: Editorial serif for special headings
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};
