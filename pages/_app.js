import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  // const getLayout = Component.getLayout || ((page) => page)
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
