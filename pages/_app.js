import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import { Navbar, Footer } from '../src/components';

export default function App({ session, Component, pageProps }) {
  return (
      <SessionProvider session={session}>
          <Navbar />
          <div className="pt-30">
              <Component {...pageProps} />

          </div>
          <Footer />
      </SessionProvider>
  );
}
