import type { StyleSheet } from 'react-native';

export function __createCreateStyle<ThemeShape>() {
  function createStyle<Obj extends T & StyleSheet.NamedStyles<any>, T>(
    fn: (theme: ThemeShape) => Obj
  ) {
    return fn;
  }

  return createStyle;
}
