/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bds: {
          deep: "#0d0d0d",
          surface: "#1a1a1a",
          well: "#121212",
          accent: "#ffcc00",
          "text-main": "#e0e0e0",
          "text-muted": "#888888",
          border: "#2a2a2a",
          success: "#4ade80",
          danger: "#ff4444",
        },
      },
      borderRadius: {
        "bds-sm": "4px",
        "bds-md": "8px",
        "bds-lg": "12px",
      },
      spacing: {
        "bds-tight": "1rem",
        "bds-standard": "1.5rem",
      },
      fontFamily: {
        bds: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
