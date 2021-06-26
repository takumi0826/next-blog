import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Layout } from '../components/layouts'
function MyApp({ Component, pageProps }) {
  switch (pageProps.layout) {
    case 'home': {
      return (
        <>
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            />
          </Head>
          <Component {...pageProps} />
        </>
      )
    }
    default: {
      return (
        <>
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )
    }
  }
}

export default MyApp
