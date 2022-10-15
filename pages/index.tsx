import { Tab } from "@headlessui/react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import { fetchCategories } from "../utils/fetchCategories";

interface Props {
  categories: Category[];
}

const Home = ({ categories }: Props) => {
  console.log(categories);
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

            <Tab.Group>
              <Tab.List className="flex justify-center">
                {categories?.map((category) => (
                  <Tab
                    key={category._id}
                    id={category._id}
                    className={({ selected }) =>
                      `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                        selected ? "borderGradient !bg-[#35383c] text-white" : "border-b-2 border-[#35383c] text-[#747474]"
                      }`
                    }
                  >
                    {category?.title}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                {/* <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
        <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel> */}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

// Backend code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();

  return {
    props: {
      categories,
    },
  };
};
