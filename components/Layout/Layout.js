import React from "react";
import NavBar from "./NavBar";
import Widgets from "./Widgets";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import Image from "next/image";
import metamaskLogo from "../../assets/metamask.png";
import errorLogo from "../../assets/error.png";
import checkLogo from "../../assets/check.png";
import { ThreeBounce } from "better-react-spinkit";

function Layout({ children }) {
  const { appStatus, connectToWallet } = useContext(TwitterContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetaMaskFound;

      case "error":
        return error;

      default:
        return loading;
    }
  };

  const userLoggedIn = (
    <>
      <NavBar />
      <div className="max-h-screen  overflow-y-scroll w-full z-0">
        <main>{children}</main>
      </div>
      <div className="hidden sm:inline min-w-[13rem] lg:min-w-[20rem]">
        <Widgets />
      </div>
    </>
  );

  const noUserFound = (
    <div className="flex flex-col h-screen w-screen items-center justify-center space-y-3">
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className="bg-orange-400 p-3 px-5 font-semibold rounded-xl cursor-pointer"
        onClick={() => connectToWallet()}
      >
        Connect Wallet
      </div>
    </div>
  );

  const noMetaMaskFound = (
    <div className="flex flex-col h-screen w-screen items-center justify-center space-y-3">
      <Image src={metamaskLogo} height={200} width={200} />
      <div className="border-[1px] border-red-500 p-3 px-5 rounded-xl text-white">
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://metamask.io/download.html"}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  );

  const error = (
    <div className="flex flex-col h-screen w-screen items-center justify-center space-y-3">
      <Image src={errorLogo} height={200} width={200} />
      <div className="border-[1px] border-red-500 p-3 px-5 rounded-xl">
        <h1 className="font-semibold text-white">
          An error occurred. Please try again later or use another browser.
        </h1>
      </div>
    </div>
  );

  const loading = (
    <div className="flex items-center justify-center w-screen h-screen">
      <ThreeBounce size={30} color="orange" />
    </div>
  );

  return (
    <div className="flex flex-row min-h-screen bg-black">{app(appStatus)}</div>
  );
}

export default Layout;
