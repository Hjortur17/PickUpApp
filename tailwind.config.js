/** @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            neutral: {
                50: "#F7F7F7",
                100: "#E1E1E1",
                200: "#CFCFCF",
                300: "#B1B1B1",
                400: "#9E9E9E",
                500: "#7E7E7E",
                600: "#626262",
                700: "#515151",
                800: "#3B3B3B",
                900: "#222222",
            },
        },
    },
},
  plugins: [],
}
