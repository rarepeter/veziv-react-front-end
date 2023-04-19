import { ReactNode } from "react";
import Navbar from "../modules/Navbar/Navbar";
import Footer from "../modules/Footer/Footer";
import GlobalErrorModal from "../modules/GlobalErrorModal/GlobalErrorModal";
import styles from "./../styles/layouts/PageLayout.module.css";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles["global-wrapper"]}>{children}</main>
      <Footer />
      <GlobalErrorModal />
    </>
  );
}
