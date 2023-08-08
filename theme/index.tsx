import { Global, ThemeProvider as EmotionProvider } from "@emotion/react";
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import { colors, absolute } from "./colors";
import global from "./global";

import { Theme, ThemeMode, UserThemeMode } from "./types";

const THEME_MODE = "theme-mode";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [userMode, setUserMode] = useState<UserThemeMode>("auto");
  const [mode, setMode] = useState<ThemeMode>("light");

  useLayoutEffect(() => {
    const body = document.querySelector("body");

    if (!document.getElementById("_sheet")) {
      const sheetContainer = document.createElement("div");
      sheetContainer.id = "_sheet";
      body?.appendChild(sheetContainer);
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-reduced-motion)").matches &&
        body?.setAttribute("data-reduce", "true");
    }

    const savedTheme = localStorage.getItem(THEME_MODE) as UserThemeMode;
    if (savedTheme) {
      setUserMode(savedTheme);
      setMode(getNewMode(savedTheme));
    } else {
      localStorage.setItem(THEME_MODE, "auto");
      setMode(getNewMode("auto"));
    }
  }, []);

  const listener = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) setMode("light");
    else setMode("dark");
  }, []);

  useEffect(() => {
    const MediaQuery = window?.matchMedia("(prefers-color-scheme: light)");

    if (userMode === "auto") {
      MediaQuery && MediaQuery.addEventListener("change", listener);
    }

    return () => {
      MediaQuery && MediaQuery.removeEventListener("change", listener);
    };
  }, [userMode]);

  const getNewMode = useCallback((userMode: UserThemeMode) => {
    let newMode: ThemeMode = "dark";

    if (userMode === "auto") {
      if (window.matchMedia("(prefers-color-scheme: light)").matches)
        newMode = "light";
    } else {
      newMode = userMode;
    }

    return newMode;
  }, []);

  const change = useCallback(
    (userMode: UserThemeMode) => {
      const newMode = getNewMode(userMode);

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

  const theme: Theme = useMemo(
    () => ({
      mode: mode,
      colors: colors[mode],
      absolute: absolute[mode],
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
