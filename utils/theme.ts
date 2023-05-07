import { Mukta } from '@next/font/google';
import { createTheme } from "@mui/material/styles";

export const mukta = Mukta({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const lightPalette = {
  primary: {
    main: '#FFFFFF',
  },
  secondary: {
    main: '#FFFFFF',
  },
  error: {
    main: '#FF0000',
  },
}

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            "margin": 0
          }
        }
      }
    }
  },
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: mukta.style.fontFamily,
  },
});

export default theme;