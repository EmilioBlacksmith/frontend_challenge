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
			gray: "#7F7F7F",
			light_gray: "#CCCCCC",
			main_color: "#40C1AD",
		},
		fontFamily: {
			sans: ["Agave"],
		},
		extend: {
			height: {
				112: "28rem",
				128: "32rem",
			},
		},
	},
	plugins: [],
};
