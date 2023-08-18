import { Theme, css } from "@emotion/react";

const global = (theme: Theme) => css`
  :root {
    font-size: 14px;
    color: ${theme.colors.text.main + ""};
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: manipulation;
    word-break: keep-all;
    white-space: normal;
    box-sizing: border-box;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    /* colors */
    --color-text-main: ${theme.colors.text.main + ""};
    --color-text-passive-1: ${theme.colors.text.passive[1] + ""};
    --color-text-passive-2: ${theme.colors.text.passive[2] + ""};
    --color-text-passive-3: ${theme.colors.text.passive[3] + ""};
    --color-box-background: ${theme.colors.box.background + ""};
    --color-box-overlay: ${theme.colors.box.overlay + ""};
    --color-box-foreground-1: ${theme.colors.box.foreground[1] + ""};
    --color-box-foreground-2: ${theme.colors.box.foreground[2] + ""};
    --color-box-foreground-3: ${theme.colors.box.foreground[3] + ""};
    --color-box-filled-1: ${theme.colors.box.filled[1] + ""};
    --color-box-filled-2: ${theme.colors.box.filled[2] + ""};
    --color-box-filled-3: ${theme.colors.box.filled[3] + ""};
    --color-box-border-1: ${theme.colors.box.border[1] + ""};
    --color-box-border-2: ${theme.colors.box.border[2] + ""};
    --color-box-border-3: ${theme.colors.box.border[3] + ""};
    --color-secondary-red: ${theme.colors.secondary.red + ""};
    --color-secondary-green: ${theme.colors.secondary.green + ""};
    --color-secondary-blue: ${theme.colors.secondary.blue + ""};
    --color-secondary-yellow: ${theme.colors.secondary.yellow + ""};
  }

  /* text styles */

  h1,
  .text-title-1 {
    font-family: var(--font-main), sans-serif;
    font-size: 26px;
    line-height: 34px;
    font-weight: 700;
  }

  h2,
  .text-title-2 {
    font-family: var(--font-main), sans-serif;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
  }

  h3,
  .text-title-3 {
    font-family: var(--font-main), sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }

  .text-paragraph-1 {
    font-family: var(--font-main), sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
  }

  .text-paragraph-2 {
    font-family: var(--font-main), sans-serif;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }

  .text-ui-1 {
    font-family: var(--font-main), sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }

  p,
  span,
  .text-ui-2 {
    font-family: var(--font-main), sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  .text-ui-3 {
    font-family: var(--font-main), sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  body {
    font-family: var(--font-main), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root:has(body[data-reduce="true"]) *,
  :root:has(body[data-reduce="true"]) *:before,
  :root:has(body[data-reduce="true"]) *:after {
    transition: unset !important;
    animation: unset !important;
  }

  input,
  button,
  select {
    box-sizing: border-box;

    &:focus-visible {
      outline: 1px dashed ${theme.colors.text.main + ""};
      outline-offset: 4px;
    }
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
  }

  #storybook-docs {
    height: 100%;
    overflow-y: auto;
  }

  #root,
  #_next {
    overflow: hidden;
    height: 100%;
  }

  html {
    background-color: ${theme.colors.box.background + ""};
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  html.transition,
  html.transition *,
  html.transition *:after,
  html.transition *:before {
    transition: background-color 300ms, border-color 300ms !important;
  }
`;

export default global;
