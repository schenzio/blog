import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const defaulFontFamily = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
const defaultPrimaryColor = "#2b71ab"
const defaultSecondaryColor = "#ffffff"

const defaultTheme = createTheme()

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: defaultPrimaryColor,
    },
    secondary: {
      main: defaultSecondaryColor
    }
  },
  typography: {
    fontFamily: defaulFontFamily,
    h1: {
      fontSize: "2.6rem",
      color: defaultSecondaryColor,
      fontWeight: 800,
    },
    h2: {
      fontSize: "2rem",
      color: defaultSecondaryColor,
      fontWeight: 700
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 400,
      paddingBottom: defaultTheme.spacing(1),
    },
    subtitle1: {
      fontSize: "1.6rem",
      color: defaultSecondaryColor,
      fontWeight: 500,
      paddingBottom: defaultTheme.spacing(3),
      fontStyle: "italic"
    },
    subtitle2: {
      fontSize: "1rem",
      paddingTop: defaultTheme.spacing(2),
      paddingBottom: defaultTheme.spacing(2),
      fontWeight: 400
    },
    body1: {
      color: defaultSecondaryColor,
      fontSize: "1.1rem",
      lineHeight: "1.6",
      paddingBottom: defaultTheme.spacing(1),
    },
    body2: {
      opacity: "0.8",
      fontWeight: 200
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: "#1bdaff",
          ".MuiSvgIcon-root": { fontSize: "4rem" },
          borderRadius: defaultTheme.spacing(3),
          ":hover": {textDecoration: "underline" }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: defaultTheme.spacing(3),
          backgroundColor: "black"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: defaultSecondaryColor
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {   
          gap: defaultTheme.spacing(1),
          alignItems: "center"
        }
      }
    }
  }
}))

export default theme
