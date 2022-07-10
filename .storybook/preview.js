export const parameters = {
  controls: {
    expanded: true,
    actions: { argTypesRegex: "^on[A-Z].*" },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
    ],
  },
};
