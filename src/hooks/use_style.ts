import type { StyleSheet } from 'react-native';

import React from 'react';
import type { ThemeContext } from '../types';

type Style<T> = T & StyleSheet.NamedStyles<any>;
type StyleFn<Theme, T> = (theme: Theme) => Style<T>;

export function __createUseStyle<
  ThemeKeys extends string | number | symbol,
  ThemeShape
>(Context: React.Context<ThemeContext<ThemeKeys, ThemeShape>>) {
  function useStyle<Obj extends Style<T>, T>(fn: StyleFn<ThemeShape, Obj>): Obj;
  function useStyle<Obj extends Style<T>, T, Obj2 extends Style<T2>, T2>(
    fn: StyleFn<ThemeShape, Obj>,
    fn2: StyleFn<ThemeShape, Obj2>
  ): Obj & Obj2;
  function useStyle<
    Obj extends Style<T>,
    T,
    Obj2 extends Style<T2>,
    T2,
    Obj3 extends Style<T3>,
    T3
  >(
    fn: StyleFn<ThemeShape, Obj>,
    fn2: StyleFn<ThemeShape, Obj2>,
    fn3: StyleFn<ThemeShape, Obj3>
  ): Obj & Obj2 & Obj3;
  function useStyle<
    Obj extends Style<T>,
    T,
    Obj2 extends Style<T2>,
    T2,
    Obj3 extends Style<T3>,
    T3,
    Obj4 extends Style<T4>,
    T4
  >(
    fn: StyleFn<ThemeShape, Obj>,
    fn2: StyleFn<ThemeShape, Obj2>,
    fn3: StyleFn<ThemeShape, Obj3>,
    fn4: StyleFn<ThemeShape, Obj4>
  ): Obj & Obj2 & Obj3 & Obj4;
  function useStyle<Obj extends Style<T>, T>(
    ...args: StyleFn<ThemeShape, Obj>[]
  ) {
    const theme = React.useContext(Context);
    return React.useMemo(() => {
      return args.reduce((acc, fn) => {
        return { ...acc, ...fn(theme.theme) };
      }, {} as Obj);
    }, [args, theme]);
  }

  return useStyle;
}
