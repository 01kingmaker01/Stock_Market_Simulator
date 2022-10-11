module.exports = {
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        text: "var(--text)",
        bar: "var(--bar)",
        hover: "var(--hover)",
        inactive: "var(--inactive)",
        panel: "var(--panel)",
        elements: "var(--elements)",
        searchbar: "var(--searchbar)",
        searchbarText: "var(--searchbarText)",
        dev: "var(--dev)",
        icons: "var(--icons)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
