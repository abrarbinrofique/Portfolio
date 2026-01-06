import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0f172a", // Slate 900
                    dark: "#020617",    // Slate 950
                },
                accent: {
                    DEFAULT: "#d4a574", // Bronze/Gold
                    light: "#e8b87f",
                },
                secondary: "#334155",   // Slate 700
                card: {
                    blue: "#1e293b",    // Slate 800
                    green: "#334155",   // Slate 700
                },
                "neon-cyan": "#d4a574", // Mapping to Bronze for compatibility
                "neon-purple": "#94a3b8", // Mapping to Slate 400 for compatibility
                "glass-bg": "rgba(255, 255, 255, 0.05)",
                "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Orbitron", "sans-serif"],
                mono: ["monospace"], // Fallback or specific mono font
            },
            animation: {
                blink: "blink 1s step-end infinite",
            },
            keyframes: {
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
