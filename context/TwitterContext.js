import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { client } from "../lib/client";

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState("loading");
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    const provider = await detectEthereumProvider();

    if (provider !== window.ethereum) return;
    try {
      ethereum
        .request({ method: "eth_accounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //   ethereum.on("accountsChanged", handleAccountsChanged);

  const connectToWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider !== window.ethereum) return setAppStatus("noMetaMask");
    try {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            console.log("Please connect to MetaMask.");
          } else {
            console.log(err);
          }
        });
    } catch (error) {
      setAppStatus("error");
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      router.push("/");
      setAppStatus("notConnected");
    } else {
      setAppStatus("connected");
      setCurrentAccount(accounts[0]);
      createUserAccount(accounts[0]);
    }
  };

  const createUserAccount = async (userWalletAddress = currentAccount) => {
    const provider = await detectEthereumProvider();

    if (provider !== window.ethereum) return setAppStatus("noMetaMask");

    try {
      const userDoc = {
        _type: "users",
        _id: userWalletAddress,
        name: "Unnamed",
        isProfileImageNft: false,
        profileImage:
          "https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_1200/02th-egg-person",
        walletAddress: userWalletAddress,
      };

      await client.createIfNotExists(userDoc);
    } catch (error) {
      router.push("/");
      setAppStatus("error");
    }
  };

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectToWallet }}
    >
      {children}
    </TwitterContext.Provider>
  );
};
