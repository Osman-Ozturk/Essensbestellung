
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout