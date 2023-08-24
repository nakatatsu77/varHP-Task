/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        48: "48px",
        64: "64px",
        32: "32px",
        56: "56px",
        130: "130px",
        233: "233px",
      },
      colors: {
        "main-100": "#778168",
        "main-100-hover": "#3f4733",
        other: {
          100: "#7b7b7b",
          200: "#58baf7",
        },
        base: {
          100: "#040e21",
          200: "#111D33",
          300: "#000c0c",
          400: "#020814",
        },
        accent: {
          100: "#98eed7",
        },
        sub: {
          100: "#3e4655",
        },
      },
      letterSpacing: {
        wider: ".05em",
      },
      opacity: {
        88: "0.88",
        48: "0.48",
      },
    },
  },
  plugins: [],
};
