import React from 'react';
import { RouteProps } from 'react-router-dom';

import { ThemeProvider } from './theme';

interface DefaultThemeProps extends RouteProps {
}

const DefaultTheme : React.FC<DefaultThemeProps> = (props) => {
    return (
        <ThemeProvider initialStyle="light" initialColor="primary">
            <div>
                {props.children}
            </div>
        </ThemeProvider>
    );
};

export {DefaultTheme};
