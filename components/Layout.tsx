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

      <main>{children}</main>

      <footer>
        {/* footer */}
        {/* <Footer /> */}
      </footer>
    </>
  );
};

export default Layout;
