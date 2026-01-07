
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ToastProvider from '../components/ToastProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastProvider />
      <Component {...pageProps} />
    </>
  );
}
