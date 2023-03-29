export const CURRENT_THEME_KEY = "CURRENT_THEME";

export const getStoredTheme = () => {
  return window.localStorage.getItem(CURRENT_THEME_KEY) || "default";
};

export const storeTheme = (theme: string) => {
    window.localStorage.setItem(CURRENT_THEME_KEY, theme);
}