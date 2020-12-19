import Head from "next/head";
import { Header } from "@components/molecules";
import { Footer } from "@components/molecules";

import styles from "./Layout.module.css";
interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "" }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
