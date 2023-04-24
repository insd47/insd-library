import { Theme, css } from "@emotion/react";

const global = (theme: Theme) => css`
  :root {
    font-size: 14px;
    color: ${theme.colors.text.main};
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: manipulation;
    word-break: keep-all;
    white-space: normal;
    box-sizing: border-box;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-family: var(--font-outfit), var(--font-spoqa), sans-serif;
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
      outline: 1px dashed ${theme.colors.text.main};
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
    background-color: ${theme.colors.background.main};
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
