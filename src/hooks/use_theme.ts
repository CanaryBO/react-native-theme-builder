import React from 'react';

export function __createUseTheme<Theme>(Context: React.Context<Theme>) {
  return function useTheme() {
    return React.useContext(Context);
  };
}
