import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../lib/auth/AuthContext";
import Layout from "../components/layout";
import { MessageProvider } from "../lib/message";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" storageKey="theme">
            <AuthProvider>
                <MessageProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MessageProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}
