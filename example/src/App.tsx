import * as React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { createTheme } from 'react-native-theme-builder';

const { ThemeProvider, createStyle, useTheme, useStyle } = createTheme({
  light: {
    primary: 'red',
    surface: '#FFFFFF',
  },
  dark: {
    primary: 'yellow',
    surface: '#000000',
  },
});

const containerStyles = createStyle((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.surface,
  },
}));

const textStyles = createStyle((theme) => ({
  text: {
    color: theme.primary,
    fontSize: 24,
  },
  link: {
    color: theme.primary,
    fontSize: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
}));

function ThemeSwitcher() {
  const { activeTheme, setTheme } = useTheme();
  const style = useStyle(containerStyles, textStyles);

  return (
    <View>
      <Text style={style.text}>Active theme: {activeTheme}</Text>
      <TouchableOpacity
        onPress={() => setTheme(activeTheme === 'light' ? 'dark' : 'light')}
      >
        <Text style={style.link}>Switch theme</Text>
      </TouchableOpacity>
    </View>
  );
}

function Component() {
  const style = useStyle(containerStyles, textStyles);
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World!</Text>
      <ThemeSwitcher />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider initialTheme={'light'}>
      <Component />
    </ThemeProvider>
  );
}
