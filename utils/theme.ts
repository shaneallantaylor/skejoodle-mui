import { Roboto } from '@next/font/google';
import { createTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

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
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;