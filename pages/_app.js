import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PesquisaProvider } from '@/context/pesquisaContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <PesquisaProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PesquisaProvider>
    </>
  )
}
