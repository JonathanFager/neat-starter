module.exports = {
  content: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
