import { ReactNode } from "react";
import Navbar from "../modules/Navbar/Navbar";
import Footer from "../modules/Footer/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
