import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import NavBar from '../ui/components/NavBar/NavBar'
import Footer from '../ui/components/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import {AuthProvider} from '../data/contexts/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette:{
      mode: "dark",
     
    }
  })

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/* <NavBar/> */}
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
