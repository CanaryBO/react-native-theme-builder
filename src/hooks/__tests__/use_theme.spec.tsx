import React from 'react';
import { __createUseTheme } from '../use_theme';
import { renderHook } from '@testing-library/react-native';

describe('__createUseTheme', () => {
  it('should create the hook to get the theme', () => {
    const Context = React.createContext<any>({ value: 1 });
    const hook = __createUseTheme(Context);
    const { result } = renderHook(() => hook());
    expect(result.current).toEqual({ value: 1 });
  });
});
