export type ThemeContext<AvailableThemes, ThemeShape> = {
  activeTheme: AvailableThemes;
  theme: ThemeShape;
  setTheme: (theme: AvailableThemes) => void;
};
