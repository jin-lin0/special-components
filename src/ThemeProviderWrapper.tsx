// src/ThemeProviderWrapper.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { lightTheme } from './themes';
import GlobalStyles from './GlobalStyles';

interface ThemeProviderWrapperProps {
    children: ReactNode;
}


const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => (
    <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    </StyleSheetManager>
);

export default ThemeProviderWrapper;
