import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3c83f6",
                "background-light": "#f5f7f8",
                "background-dark": "#101722",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
} satisfies Config;
