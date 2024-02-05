import React from 'react';
import type { ThemeContext } from './types';
import { __createThemeProvider } from './provider';
import { __createUseStyle } from './hooks/use_style';
import { __createCreateStyle } from './utils/create_style';
import { __createUseTheme } from './hooks/use_theme';

export const MISSING_CONTEXT = () => {
  throw new Error('Missing context');
};

export function createTheme<ThemeShape, ThemeKeys extends string>(
  props: Record<ThemeKeys, ThemeShape>
) {
  const Context = React.createContext<ThemeContext<ThemeKeys, ThemeShape>>({
    activeTheme: MISSING_CONTEXT(),
    theme: MISSING_CONTEXT(),
    setTheme: MISSING_CONTEXT,
  });

  return {
    Context,
    ThemeProvider: __createThemeProvider<ThemeKeys, ThemeShape>(Context, props),
    useStyle: __createUseStyle<ThemeKeys, ThemeShape>(Context),
    createStyle: __createCreateStyle<ThemeShape>(),
    useTheme: __createUseTheme<ThemeContext<ThemeKeys, ThemeShape>>(Context),
  };
}
