import Link from "next/link";
import React, { useContext } from "react";
import EditProfile from "../components/Buttons/EditProfile";
import ProfileTweet from "../components/Tweet/ProfileTweet";
import ProfileTweets from "../components/Tweet/ProfileTweets";
import { TwitterContext } from "../context/TwitterContext";

function profile() {
  const { currentUser, currentAccount } = useContext(TwitterContext);

  return (
    <div className="text-white flex flex-col">
      <div className="h-14 p-3 border-b-2 border-slate-400 sticky top-0 z-50 bg-black">
        <h1 className="font-bold text-xl">Profile</h1>
      </div>
      <div className="flex flex-col">
        <div className="relative h-[18rem]">
          <div className="absolute bg-slate-800 h-[12rem] flex items-center justify-center top-0 w-full">
            <h1>No Cover Photo</h1>
          </div>
          <div
            className={`${
              currentUser.isProfileImageNft && "border-4 border-orange-600"
            } bg-slate-300 absolute bottom-3 left-5 h-36 w-36 rounded-full flex justify-center items-center overflow-hidden`}
          >
            <img src={currentUser.profileImage}></img>
          </div>
          <div className="absolute bottom-10 right-12">
            <EditProfile />
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-7">
          <h1 className="font-bold text-2xl">{currentUser.name}</h1>
          <h1 className="font-semibold text-md text-slate-400">
            @{currentAccount.slice(1, 6)}...{currentAccount.slice(34)}
          </h1>
        </div>
        <div className="flex space-x-1 px-7 h-10 border-b-2 border-slate-600">
          <h1 className="font-bold">Tweets</h1>
        </div>
        <div>
          <ProfileTweets />
        </div>
      </div>
    </div>
  );
}

export default profile;
