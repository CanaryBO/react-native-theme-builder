import React from 'react';

import { renderHook } from '@testing-library/react-native';
import { __createUseStyle } from '../use_style';

describe('__createUseStyle', () => {
  it('should create the hook to use a style resource', () => {
    const Context = React.createContext<any>({ theme: { primary: '#FFFFFF' } });
    const useStyle = __createUseStyle(Context);
    const { result } = renderHook(() =>
      useStyle((theme: any) => ({
        text: {
          color: theme.primary,
        },
      }))
    );
    expect(result.current.text).toEqual({
      color: '#FFFFFF',
    });
  });
});
