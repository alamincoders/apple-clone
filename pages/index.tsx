import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import TabsCard from "../components/TabsCard";
import { fetchCategories } from "../utils/fetchCategories";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Clone Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
        <section className="relative z-40 min-h-screen bg-[#1b1b1b]">
          <div className="space-y-10 py-16">
            <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">New Promos</h1>
            <TabsCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

// Backend code
export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategories();

  return {
    props: {},
  };
};
