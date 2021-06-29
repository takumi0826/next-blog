import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Layout } from '../components/layouts'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Header, Footer } from '../components/layouts'
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
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            />
          </Head>
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
