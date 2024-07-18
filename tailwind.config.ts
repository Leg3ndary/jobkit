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
                "accent": "#f35325",
                "primary": "#0a192f",
                "secondary": "#112240",
                "tertiary": "#1a3048",
                "background": "#0a192f",
            }
        },
    },
    plugins: [],
};
export default config;
