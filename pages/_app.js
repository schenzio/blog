import '../styles/globals.css'
import theme from '../styles/utils/theme'
import Head from 'next/head'
import {
  CssBaseline,
  Container,
  ThemeProvider,
} from '@mui/material'
import { SITE_TITLE } from '../styles/utils/constants'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container disableGutters maxWidth={false}>
          <Component {...pageProps}/>
        </Container>
      </ThemeProvider>
    </>
  )
}
