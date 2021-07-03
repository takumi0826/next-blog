import 'assets/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Layout } from 'components/layouts'
import { motion, AnimatePresence } from 'framer-motion'
import { Header, Footer } from 'components/layouts'
// import { GA_TRACKING_ID, pageview } from 'lib/gtag'
// import { AppProps } from 'next/app'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'

function MyApp({ Component, pageProps, router }) {
  const container = {
    hidden: { y: 0 },
    show: {
      y: '-100vh',
      transition: {
        ease: 'easeInOut',
        duration: 0.6,
      },
    },
  }
  // useEffect(() => {
  //   if (!GA_TRACKING_ID) return
  //   const handleRouteChange = (url: string) => {
  //     pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  switch (pageProps.layout) {
    case 'home': {
      return (
        <>
          <Header />
          <motion.div
            key={router.route}
            className="w-[100vw] h-[100vh] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
            initial="hidden"
            animate="show"
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
          <motion.div
            key={router.route}
            className="w-[100vw] h-[100vh] from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-tl fixed left-0 top-0 z-40"
            initial="hidden"
            animate="show"
            variants={container}
          ></motion.div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )
    }
  }
}

export default MyApp
