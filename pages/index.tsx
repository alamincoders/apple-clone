import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Apple Clone Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  );
};

export default Home;
