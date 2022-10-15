import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Clone Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  );
};

export default Home;
