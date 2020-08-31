import { red, orange, green, blue, grey } from '@material-ui/core/colors';

export const customTheme = {
    typography: {
        fontFamily: '"Noto Sans KR", sans-serif',
        fontWeightRegular: 300,
        fontSize: 12,
    },
    palette: {
        primary: {
            main: grey[300],
            light: grey[50],
            dark: grey[900],
            contrastText: grey[50],
        },
        secondary: {
            main: red[700],
            light: red[100],
            dark: red[900],
            contrastText: grey[50],
        },
        info: {
            main: green[400],
            light: green[100],
            dark: green[900],
            contrastText: grey[50],
        },
        success: {
            main: blue[500],
            light: blue[100],
            dark: blue[900],
            contrastText: grey[50],
        },
        warning: {
            main: orange[500],
            light: orange[100],
            dark: orange[900],
            contrastText: grey[50],
        },
        error: {
            main: red[400],
            light: red[100],
            dark: red[900],
            contrastText: grey[50],
        },
        // background: {
        //     default: getPaletteBackground(),
        // },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1280,
            xl: 1920,
        },
    },
};
