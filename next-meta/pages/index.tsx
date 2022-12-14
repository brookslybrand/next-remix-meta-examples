import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Page from "../components/Page";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Page title="Create Next App" description="Generated by create next app">
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/activity">Activity</Link>
          <br />
          <Link href="/notifications">Notifications</Link>
        </main>
      </div>
    </Page>
  );
};

export default Home;
