
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from "../ui/header"


const Platform: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>noreturn</title>
        <meta
          content="noreturn"
          name="description"
        />
       <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main className={styles.main}>
        <Header />
  

      </main>

      <footer>
      
      </footer>


    </div>
  );
};

export default Platform;
