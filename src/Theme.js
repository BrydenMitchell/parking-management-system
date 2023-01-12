import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#002b49',
                light: '#9ea1a2',
                dark: '#002137',
            },
            secondary: {
                main: '#0096ff',
                light: '#cfd4d5',
            },
        },
        overrides: {
            MuiMenuItem: {
                root: {
                    backgroundColor: "#ff0000",
                    "&$selected": {
                        backgroundColor: "#00ffff"
                    }
                }
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1300,
                xl: 1536,
            },
        }
    }
)
