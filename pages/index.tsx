import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "../components/home/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Dev.Syrius Blog</title>
                <meta name="description" content="Dev.Syrius Blog" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero />
            </main>
        </>
    );
}
