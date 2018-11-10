export type ThemeOptions = "light" | "dark";
import { primaryTheme } from "./muiThemes/primary";

const themeKey = "THEME_TYPE";
export const theme = primaryTheme;

export function getSavedTheme(): ThemeOptions {
  const result = localStorage.getItem(themeKey);
  if (result == null) return "light";
  return result as ThemeOptions;
}

export function saveTheme(theme: ThemeOptions) {
  localStorage.setItem(themeKey, theme);
  console.debug(`stored theme as ${theme}`);
}