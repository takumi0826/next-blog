import 'assets/styles/globals.css'
import { Layout } from 'components/layouts'
import { motion, AnimatePresence } from 'framer-motion'
import { Header, Footer } from 'components/layouts'
import { GA_TRACKING_ID, pageview } from 'lib/gtag'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const container = {
    hidden: { y: 0 },
    show: {
      y: '-100vh',
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
            className="w-[100vw] min-h-[100vh] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
            initial="hidden"
            animate="show"
            variants={container}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </motion.div>
          <Footer />
        </>
      )
    }
    default: {
      return (
        <>
          <motion.div
            key={router.route}
            className="w-[100vw] min-h-[100vh] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
            initial="hidden"
            animate="show"
            variants={container}
          ></motion.div>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </>
      )
    }
  }
}

export default MyApp
