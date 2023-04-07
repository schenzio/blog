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
      fontSize: "4.5rem"
    },
    h2: {
      fontSize: "3rem"
    },
    subtitle1: {
      fontSize: "1.8rem"
    }
  },
  components: {
  }
}))

export default theme
