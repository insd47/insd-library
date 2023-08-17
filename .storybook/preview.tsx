import React from "react";
import type { Preview } from "@storybook/react";
import ThemeProvider from "../src/theme";
import theme from "./theme";

import { icon, main } from "./fonts";

document.body.classList.add(icon.variable);
document.body.classList.add(main.variable);

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
