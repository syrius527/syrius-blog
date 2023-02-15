import Header from "./header";
import Footer from "./footer";

import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="h-20"></div>
            <div className="bg-primary">{children}</div>
            <Footer />
        </>
    );
}
