import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // runs on mount
    if (typeof window !== 'undefined') {
      // window.__forceSmoothScrollPolyfill__ = true;
      smoothscroll.polyfill();
    }
  }, []);

  return <Component {...pageProps} />;
}
