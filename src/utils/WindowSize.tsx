import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  if (typeof window !== 'undefined') {
    // windowやdocumentを使う処理を記述
    const getWindowSize = () => {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }
    const [windowSize, setWindowSize] = useState(getWindowSize)

    useEffect(() => {
      const onResize = () => {
        setWindowSize(getWindowSize)
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])
    return windowSize
  }
}
