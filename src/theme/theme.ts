import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00B5E2',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#E3FAFF',
            contrastText: '#0175A3',
        },
        destructive: {
            main: '#FF4D4D',
            contrastText: '#FFFFFF',
        },
        yellow: {
            main: '#FFA000',
            contrastText: '#FFFFFF',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        destructive: Palette['primary'];
        yellow: Palette['primary'];
    }
    interface PaletteOptions {
        destructive?: PaletteOptions['primary'];
        yellow?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        destructive: true;
        yellow: true;
    }
}

export default theme;