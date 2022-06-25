import Layout from "../components/Layout/Layout";
import { TwitterProvider } from "../context/TwitterContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TwitterProvider>
  );
}

export default MyApp;
