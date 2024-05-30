/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			black: "#000000",
			white: "#FFFFFF",
			dark_gray: "#111111",
			gray: "#7f7f7f",
			light_gray: "#cccccc",
			main_color: "#40c1ad",
		},
		fontFamily: {
			sans: ["Agave"],
		},
		extend: {},
	},
	plugins: [],
};
