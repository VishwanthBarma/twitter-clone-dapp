import Head from "next/head";
import Image from "next/image";
import TweetBox from "../components/Tweet/TweetBox";
import TweetPost from "../components/Tweet/TweetPost";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white">
        <div className="h-14 p-3 border-b-2 border-slate-400 sticky top-0 z-50 bg-black">
          <h1 className="font-bold text-xl">Home</h1>
        </div>
        <TweetBox />
        <div>
          <TweetPost />
          <TweetPost />
          <TweetPost />
          <TweetPost />
          <TweetPost />
          <TweetPost />
        </div>
      </div>
    </div>
  );
}
