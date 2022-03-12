import '../styles/globals.css'
import Header from '../compornents/Header'
import Footer from '../compornents/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
