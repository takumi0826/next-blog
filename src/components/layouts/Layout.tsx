import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-[120px] px-[24px]">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
