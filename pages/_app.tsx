import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../redux/app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
