import { Global, ThemeProvider as EmotionProvider } from "@emotion/react";
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import colors from "./colors";
import global from "./global";

import "./fonts.css";

import { Theme, ThemeMode, UserThemeMode } from "./types";

const THEME_MODE = "theme-mode";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [userMode, setUserMode] = useState<UserThemeMode>("auto");
  const [mode, setMode] = useState<ThemeMode>("light");

  useLayoutEffect(() => {
    const body = document.querySelector("body");

    // add _sheet element
    if (!document.getElementById("_sheet")) {
      const sheetContainer = document.createElement("div");
      sheetContainer.id = "_sheet";
      body?.appendChild(sheetContainer);
    }

    if (window.matchMedia) {
      // reduce motion
      window.matchMedia("(prefers-reduced-motion)").matches &&
        body?.setAttribute("data-reduce", "true");
    }

    // get user mode from storage
    const savedTheme = localStorage.getItem(THEME_MODE);
    setUserMode(savedTheme ? (savedTheme as UserThemeMode) : "auto");
  }, []);

  // subscribe user when user mode is "auto"
  const listener = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) setMode("dark");
    else setMode("light");
  }, []);

  useEffect(() => {
    const MediaQuery = window?.matchMedia("(prefers-color-scheme: dark)");

    if (userMode === "auto") {
      MediaQuery && MediaQuery.addEventListener("change", listener);
    }

    return () => {
      MediaQuery && MediaQuery.removeEventListener("change", listener);
    };
  }, [userMode]);

  // change theme
  const change = useCallback(
    (userMode: UserThemeMode) => {
      let newMode: ThemeMode = "dark";

      // check system theme
      if (userMode === "auto") {
        if (window.matchMedia("(prefers-color-scheme: light)").matches)
          newMode = "light";
      } else {
        newMode = userMode;
      }

      if (newMode !== mode) {
        document.documentElement?.classList.add("transition");
        setTimeout(
          () => document.documentElement?.classList.remove("transition"),
          300
        );
        setMode(newMode);
        setUserMode(newMode);
        localStorage.setItem("theme-mode", newMode);
      }
    },
    [mode]
  );

  // theme object
  const theme: Theme = useMemo(
    () => ({
      mode: mode,
      colors: colors[mode],
      change,
    }),
    [mode]
  );

  return (
    <>
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
      <Global styles={global(theme)} />
    </>
  );
};

export default ThemeProvider;
