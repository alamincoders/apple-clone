import Head from "next/head";
import Footer from "./Footer";
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

      <footer>
        {/* footer */}
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
