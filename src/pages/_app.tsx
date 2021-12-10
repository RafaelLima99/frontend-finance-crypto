import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import NavBar from '../ui/components/NavBar/NavBar'
import Footer from '../ui/components/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline';


function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette:{
      mode: "dark",
      primary: {
        light: '#00f853',
        main: '#df0f88',
        dark: '#4c03f7',
        contrastText: '#fff',
      },
    }
  })

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
