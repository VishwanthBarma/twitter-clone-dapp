import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { client } from "../lib/client";

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState("loading");
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [tweets, setTweets] = useState([]);

  const router = useRouter();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (!currentAccount && appStatus == "connected") return;
    getCurrentUserDetails(currentAccount);
    fetchTweets();
  }, [currentAccount, appStatus]);

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

  const fetchTweets = async () => {
    const query = `
    *[_type == "tweets"]{
      "author": author->{name, walletAddress, profileImage, isProfileImageNft},
      tweet,
      timestamp
    } | order(timestamp desc)
    `;

    const sanityResponse = await client.fetch(query);
    setTweets([]);
    sanityResponse.forEach(async (item) => {
      const newItem = {
        tweet: item.tweet,
        timestamp: item.timestamp,
        author: {
          name: item.author.name,
          walletAddress: item.author.walletAddress,
          isProfileImageNft: item.author.isProfileImageNft,
          profileImage: item.author.profileImage,
        },
      };

      setTweets((prevState) => [...prevState, newItem]);
    });
  };

  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== "connected") return;

    const query = `
    *[_type == "users" && _id == "${userAccount}"]{
      "tweets": tweets[]->{timestamp, tweet} | order(timestamp desc),
      name,
      profileImage,
      isProfileImageNft,
      coverImage,
      walletAddress
    }
    `;

    const sanityResponse = await client.fetch(query);

    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
      coverImage: sanityResponse[0].coverImage,
      walletAddress: sanityResponse[0].walletAddress,
    });
  };

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        setAppStatus,
        currentAccount,
        connectToWallet,
        fetchTweets,
        getCurrentUserDetails,
        tweets,
        currentUser,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};
