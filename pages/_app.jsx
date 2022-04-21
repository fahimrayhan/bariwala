import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../store/GlobalState'


function MyApp({ Component, pageProps }) {

  // const getLayout = Component.getLayout || ((page) => page)
  if (Component.getLayout) {
    return <DataProvider>
      {Component.getLayout(<Component {...pageProps} />)}
    </DataProvider>
  }

  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>

  )
}

export default MyApp
