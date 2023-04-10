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
      fontSize: "2.7rem",
      color: defaultSecondaryColor,
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.2rem",
      color: defaultSecondaryColor,
      fontWeight: 500
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.6rem",
      color: defaultSecondaryColor,
      fontWeight: 500,
      paddingBottom: defaultTheme.spacing(3),
      fontStyle: "italic"
    },
    subtitle2: {
      fontStyle: "italic",
      fontSize: "0.875rem"
    },
    body1: {
      color: defaultSecondaryColor,
      fontSize: "1.2rem",
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
          ".MuiSvgIcon-root": {
            fontSize: "50px",
          },
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: defaultSecondaryColor
        }
      }
    }
  }
}))

export default theme
