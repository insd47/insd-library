"use client";

import { Global, ThemeProvider as EmotionProvider } from "@emotion/react";
import React, {
  PropsWithChildren,
  useLayoutEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

import { colors, absolute } from "./colors";
import global from "./global";

import type { Theme, ThemeMode, UserThemeMode } from "./types";

export type {
  CSSColor,
  ColorWithOpacity,
  ThemeMode,
  UserThemeMode,
  Theme,
} from "./types";

const THEME_MODE = "theme-mode";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [userMode, setUserMode] = useState<UserThemeMode>("system");
  const [mode, setMode] = useState<ThemeMode>("dark");

  const transitionRef = useRef<NodeJS.Timeout | null>(null);

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
      localStorage.setItem(THEME_MODE, "system");
      setMode(getNewMode("system"));
    }
  }, []);

  const listener = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) setMode("light");
    else setMode("dark");
  }, []);

  useLayoutEffect(() => {
    const MediaQuery = window?.matchMedia("(prefers-color-scheme: light)");

    if (userMode === "system") {
      MediaQuery && MediaQuery.addEventListener("change", listener);
    }

    return () => {
      MediaQuery && MediaQuery.removeEventListener("change", listener);
    };
  }, [userMode]);

  const getNewMode = (userMode: UserThemeMode) => {
    let newMode: ThemeMode = "dark";

    if (userMode === "system") {
      if (window.matchMedia("(prefers-color-scheme: light)").matches)
        newMode = "light";
    } else {
      newMode = userMode;
    }

    return newMode;
  };

  const executeTransition = () => {
    if (transitionRef.current) clearTimeout(transitionRef.current);

    document.documentElement?.classList.add("transition");

    transitionRef.current = setTimeout(
      () => document.documentElement?.classList.remove("transition"),
      300
    );
  };

  const change = useCallback(
    (userMode: UserThemeMode) => {
      const newMode = getNewMode(userMode);

      if (newMode !== mode) {
        executeTransition();
        setMode(newMode);
        setUserMode(newMode);
        localStorage.setItem("theme-mode", newMode);
      }
    },
    [mode]
  );

  const variables = {
    radius: {
      1: "12px",
      2: "10px",
      3: "8px",
      4: "6px",
      5: "4px",
    },
  };

  const theme: Theme = useMemo(
    () => ({
      mode: mode,
      system: userMode === "system",
      colors: colors[mode],
      absolute: absolute[mode],
      variables,
      change,
      executeTransition: () => {},
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
