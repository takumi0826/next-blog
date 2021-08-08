import 'assets/styles/globals.css'
import { Layout } from 'components/layouts'
import { motion } from 'framer-motion'
import { Header, Footer } from 'components/layouts'
import { GA_TRACKING_ID, pageview } from 'lib/gtag'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const container = {
    hidden: { y: 0 },
    show: {
      y: '-100%',
      transition: {
        ease: [1, 0.01, 0.49, 1.05],
        duration: 0.6,
      },
    },
  }
  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  switch (pageProps.layout) {
    case 'home': {
      return (
        <>
          <Header />
          <motion.div
            key={router.route}
            className="w-[100vw] min-h-[100%] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={container}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
          <Footer />
        </>
      )
    }
    default: {
      return (
        <>
          <Layout>
            <motion.div
              key={router.route}
              className="w-[100vw] min-h-[100%] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={container}
            ></motion.div>
            <Component {...pageProps} />
          </Layout>
        </>
      )
    }
  }
}

export default MyApp
