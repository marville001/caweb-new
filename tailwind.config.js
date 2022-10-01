module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px",
            },
        },
        extend: {
            colors: {
                "dodge-blue": "#236092",
                "sea-green": "#407b54",
                steelblue: "#4458b8",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],

    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    primary: "#00C194",
                    secondary: "#0e2e50",
                    accent: "#627be0",
                    warning: "#f3a004",
                    error: "#cf074e",
                    info: "#0e2e50",
                    neutral: "#ffffff",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
};
