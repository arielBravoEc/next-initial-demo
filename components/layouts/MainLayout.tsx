import { FC, ReactNode } from "react";
import Head from "next/head";
import NavBar from "../NavBar";
import styles from "./MainLayout.module.css";

type Props = {
  children?: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - ARIEL</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
