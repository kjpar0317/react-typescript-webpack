import React from 'react';
import { RouteProps } from 'react-router-dom';

import { Provider } from './ThemeContext';

interface ThemeProviderProps extends RouteProps {
    initialStyle : string,
    initialColor: string
}

const ThemeProvider : React.FC<ThemeProviderProps> = props => {
    const [ theme, setTheme ] = React.useState('');

    const handleChangeTheme = (themeState : any) => {
        setTheme(themeState);
    };

    return (
        <Provider
            value = {{
                style: props.initialStyle,
                color: props.initialColor,
                theme: theme,
                handleChangeTheme: { handleChangeTheme }
            }}
        >
            { props.children }
        </Provider>
        )
};

export {ThemeProvider};
