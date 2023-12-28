import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.svelte",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                sansJKTPlus: ["Plus Jakarta Sans"],
            },
        },
        colors: {
            "Neutral/10": "#FFFFFF",
            "Neutral/20": "#F6F6F6",
            "Neutral/30": "#EEEEEE",
            "Neutral/40": "#E3E3E3",
            "Neutral/50": "#C6C6C6",
            "Neutral/60": "#A5A5A5",
            "Neutral/70": "#7F7F7F",
            "Neutral/80": "#6C6C6C",
            "Neutral/90": "#4D4D4D",
            "Neutral/100": "#1B1B1B",
            "Primary-blue": "#5E51D9",
            "Primary-surface": "rgba(94, 81, 217, 0.08);",
            "Primary-Main": "#5E51D9",
        },
        gridTemplateColumns: {
            custom: "1.1fr 1fr 1fr",
            transaksi: "1fr 1fr",
        },
        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            laptop3: {
                min: "1280px",
                max: "1439px",
            },

            laptop1: {
                min: "1440px",
                max: "1500px",
            },

            laptop2: {
                raw: "(min-width: 1280px) and (max-height: 800px)",
            },

            laptop4: {
                raw: "(min-width: 1300px) and (max-height: 768px)",
            },
        },
    },
    plugins: [forms],
};
