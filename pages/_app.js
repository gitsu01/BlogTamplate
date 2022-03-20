import '../styles/globals.css'
import Header from '../compornents/Header'
import Footer from '../compornents/Footer'
import Menu from '../compornents/Menu'

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    <Menu />
  </>
}

export default MyApp
