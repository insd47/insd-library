import { Theme, css } from "@emotion/react";

const global = (theme: Theme) => css`
  :root {
    font-family: var(--font);
    font-size: 14px;
    color: ${theme.colors.text.main};
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: manipulation;
    word-break: keep-all;
    box-sizing: border-box;

    --willchangedefault: background-color, border-color, color;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
    font-family: var(--font);
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

  #root,
  #_next {
    overflow: hidden;
    height: 100%;
  }

  html {
    background-color: ${theme.colors.background.main};
    will-change: background-color;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  html.transition,
  html.transition button {
    transition: background-color 300ms, border-color 300ms !important;
  }
`;

export default global;
