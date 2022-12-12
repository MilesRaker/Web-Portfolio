import { createTheme } from '@mui/material/styles';

const customThemeOne = createTheme({
    palette: {
        primary: {
            light: '#80d6ff',
            main: '#42A5F5',
            dark: '#0077c2'
        },
        secondary: {
            light: '#ffea80',
            main: '#FDB850',
            dark: '#c6881e',
        },
        accent: {
            light: '#C298F9',
            main: '#9342F5',
            dark: '#7000EB'
        },
        grey: {
            light: '#ffffff',
            main: '#FAFAFA',
            dark: '#c7c7c7'
        }
    },

    typography: {
        varela: {
            fontFamily: 'Varela'
        },
        quattro: {
            fontFamily: 'Quattrocento Sans'
        }
    },

    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },


})

export default customThemeOne;