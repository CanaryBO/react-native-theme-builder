/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import type { ThemeContext } from './types';

type Props<Keys> = {
  initialTheme: Keys;
  children: React.ReactNode;
};

export function __createThemeProvider<
  ThemeKeys extends string | number | symbol,
  ThemeShape
>(
  Context: React.Context<ThemeContext<ThemeKeys, ThemeShape>>,
  themes: Record<ThemeKeys, ThemeShape>
) {
  return (props: Props<ThemeKeys>) => {
    const themesStorage = React.useRef(themes);
    const [themeKey, setTheme] = React.useState<ThemeKeys>(props.initialTheme);
    const theme = React.useMemo(() => {
      return themesStorage.current[themeKey];
    }, [themeKey]);

    return (
      <Context.Provider
        value={{
          activeTheme: themeKey,
          theme,
          setTheme,
        }}
      >
        {props.children}
      </Context.Provider>
    );
  };
}
