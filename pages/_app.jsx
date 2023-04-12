import Layout from '@/layout/Layout.js'
import '@/styles/globals.css'
import store from '@/redux/store.js'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
    <Layout >
    <ToastContainer />
      <Component {...pageProps} />
    </Layout>

    </Provider>
    </SessionProvider>
  )
}
