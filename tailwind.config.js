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
                "dark-blue": "#264653",
                "light-yellow": "#e9c46a",
                "red-orange": "#e76f51",
            },
            minHeight: {
                96: "24rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
