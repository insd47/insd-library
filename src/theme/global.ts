import { Theme, css } from "@emotion/react";

const global = (theme: Theme) => css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css");

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
    --color-box-shadow-1: ${theme.colors.box.shadow[1] + ""};
    --color-box-shadow-2: ${theme.colors.box.shadow[2] + ""};
    --color-secondary-red: ${theme.colors.secondary.red + ""};
    --color-secondary-green: ${theme.colors.secondary.green + ""};
    --color-secondary-blue: ${theme.colors.secondary.blue + ""};
    --color-secondary-yellow: ${theme.colors.secondary.yellow + ""};

    /* radius */
    --radius-1: ${theme.variables.radius[1]};
    --radius-2: ${theme.variables.radius[2]};
    --radius-3: ${theme.variables.radius[3]};
    --radius-4: ${theme.variables.radius[4]};
    --radius-5: ${theme.variables.radius[5]};
  }

  /* text styles */

  h1,
  .text-title-1 {
    font-family: Pretendard, sans-serif;
    font-size: 26px;
    line-height: 34px;
    font-weight: 700;
  }

  h2,
  .text-title-2 {
    font-family: Pretendard, sans-serif;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
  }

  h3,
  .text-title-3 {
    font-family: Pretendard, sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }

  .text-paragraph-1 {
    font-family: Pretendard, sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
  }

  .text-paragraph-2 {
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }

  .text-ui-1 {
    font-family: Pretendard, sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }

  p,
  span,
  .text-ui-2 {
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  .text-ui-3 {
    font-family: Pretendard, sans-serif;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  body {
    font-family: Pretendard, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
    max-width: 100vw;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #storybook-docs {
    height: 100%;
    overflow-y: auto;
  }

  html {
    background-color: ${theme.colors.box.background + ""} !important;
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
