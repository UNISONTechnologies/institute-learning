const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: [
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/*.html",
        "./*.html",
        "./*.md",
    ],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                "dark-gray": "#222831",
                "light-gray": "#393E46",
                "light-yellow": "#FFD369",
            },
            minHeight: {
                96: "24rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar"),
    ],
};
