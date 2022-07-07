import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fafafa',
            dark: 'c7c7c7'
        },
        secondary: {
            light: '#80d6ff',
            main: '#42a5f5',
            dark: '#0077c2',
        }
    },
    spacing: 4,

})

export default customTheme;