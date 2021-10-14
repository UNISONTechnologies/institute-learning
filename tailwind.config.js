module.exports = {
    purge: [
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/*.html",
        "./*.html",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
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
