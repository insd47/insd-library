import React from "react";
import type { Preview } from "@storybook/react";
import ThemeProvider from "../theme";
import theme from "./theme";

import { icon, spoqa, outfit } from "./fonts";

document.body.classList.add(icon.variable);
document.body.classList.add(spoqa.variable);
document.body.classList.add(outfit.variable);

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
