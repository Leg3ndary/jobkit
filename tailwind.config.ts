import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                "custom-hsla": "hsla(0,100%,50%,1)",
            },
            backgroundImage: {
                "custom-radial": `
                    radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
                    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
                    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
                    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
                    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
                `,
                "custom-radial2": `
                    radial-gradient(at 27% 11%, hsla(320,61%,71%,1) 0px, transparent 50%),
                    radial-gradient(at 60% 88%, hsla(216,89%,61%,1) 0px, transparent 50%),
                    radial-gradient(at 4% 67%, hsla(292,73%,79%,1) 0px, transparent 50%),
                    radial-gradient(at 69% 45%, hsla(329,93%,61%,1) 0px, transparent 50%),
                    radial-gradient(at 88% 12%, hsla(314,90%,66%,1) 0px, transparent 50%),
                    radial-gradient(at 73% 63%, hsla(89,62%,74%,1) 0px, transparent 50%),
                    radial-gradient(at 9% 83%, hsla(143,68%,68%,1) 0px, transparent 50%);
                `,
            },
        },
    },
    plugins: [],
};
export default config;
