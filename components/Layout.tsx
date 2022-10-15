import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <header>
        <Header />
      </header>

      <main className="lg:container lg:mx-auto">{children}</main>

      <footer>{/* footer */}</footer>
    </>
  );
};

export default Layout;
