import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // This enables class-based dark mode
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                // Light Theme
                primary: {
                    light: '#3B82F6', // Vibrant blue
                    DEFAULT: '#2563EB',
                    dark: '#1D4ED8',
                },
                background: {
                    light: '#FFFFFF',
                    DEFAULT: '#FAFAFA',
                },
                text: {
                    light: '#1F2937',
                    DEFAULT: '#111827',
                },
                // Dark Theme (will be applied via .dark class)
                dark: {
                    primary: {
                        light: '#818CF8', // Vibrant indigo
                        DEFAULT: '#6366F1',
                        dark: '#4F46E5',
                    },
                    background: {
                        light: '#1F2937',
                        DEFAULT: '#111827',
                    },
                    text: {
                        light: '#F3F4F6',
                        DEFAULT: '#FFFFFF',
                    },
                }
            },
        },
    },
    plugins: [],
};
export default config;