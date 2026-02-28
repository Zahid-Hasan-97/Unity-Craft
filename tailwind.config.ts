import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    main: "#FFFFFF",
                    off: "#F9F9F9",
                },
                text: {
                    dark: "#222222",
                    muted: "#888888",
                },
                accent: {
                    DEFAULT: "#C2A578",
                    hover: "#A68A5E",
                },
                border: "#EAEAEA",
            },
            fontFamily: {
                sans: ["var(--font-jost)", "sans-serif"],
                serif: ["var(--font-cormorant)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;