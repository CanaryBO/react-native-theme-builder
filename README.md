# react-native-theme-builder

Simple way to create themes and use them inside the application

## Installation

```sh
npm install react-native-theme-builder
```

## Usage

Create you themes and wrap your app with the ThemeProvider
```js
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
```

Create your style variants
```js
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
```

Use the theme and styles
```js
const Component = () => {
  const styles = useStyle([containerStyles, textStyles]);
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.link}>Click me</Text>
      </View>
  );
};
```

Change the theme
```js
const Component = () => {
  const { theme, setTheme } = useTheme();
  const styles = useStyle([containerStyles, textStyles]);

  return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.link} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Click me</Text>
      </View>
  );
};
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
