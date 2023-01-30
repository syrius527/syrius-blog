import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" storageKey="theme">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
