import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/GlobalStyles";
import { lightTheme } from "../src/themes";

// https://storybook.js.org/docs/api/parameters
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "lightcc", value: "#fff" },
        { name: "dark", value: "#333" },
        { name: "lightyellow", value: "#faf5cd" },
        { name: "lightblue", value: "#e2eef7" },
        { name: "lightgreen", value: "#c8e4b9" },
      ],
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;
