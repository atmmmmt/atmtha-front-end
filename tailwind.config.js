module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        backdropFilter: {
            none: "none",
            blur: "blur(7.5px)",
        },
        boxShadow: {
            shadow: "0px 2px 7px 0px rgba(18, 18, 18, 0.15)",
        },
        colors: {
            main: "#00B0DC",
            second: "#1A96B6",
            black: "#042128",
            darkBlue: "#004556",
            silver: "#BBC2C3",
            bg: "#f8f8f8",
            input: "##007490",
        },
    },
    plugins: [],
};
