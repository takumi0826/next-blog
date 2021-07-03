import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-[120px] px-[24px]">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
