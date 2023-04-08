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
      fontSize: "4.5rem",
      color: defaultSecondaryColor,
      fontWeight: 700
    },
    h2: {
      fontSize: "3rem",
      color: defaultSecondaryColor,
      fontWeight: 500
    },
    subtitle1: {
      fontSize: "2.5rem",
      color: defaultSecondaryColor,
      fontWeight: 500,
      paddingBottom: defaultTheme.spacing(4)
    },
    body1: {
      color: defaultSecondaryColor,
      fontSize: "1.2rem",
      lineHeight: "1.6"
    }
  },
  components: {
  }
}))

export default theme
