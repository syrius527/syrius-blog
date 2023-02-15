import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '../lib/auth/AuthContext';
import Layout from '../components/layout';
import { useEffect } from 'react';
import { useAuth } from '../lib/auth/useAuth';

export default function App({ Component, pageProps }: AppProps) {
  const { user } = useAuth();
  useEffect(() => {

  })
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" storageKey="theme">
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
