import React, { useContext, useState } from "react";
import { TwitterContext } from "../context/TwitterContext";
import { client } from "../lib/client";

function Settings() {
  const [input, setInput] = useState("");
  const { currentAccount, getCurrentUserDetails, setAppStatus } =
    useContext(TwitterContext);

  const changeName = async () => {
    if (!input) return;
    setAppStatus("loading");
    await client.patch(currentAccount).set({ name: input }).commit();
    getCurrentUserDetails(currentAccount);
    setInput("");
    setAppStatus("connected");
  };
  return (
    <div className="text-white flex flex-col">
      <div className="h-14 p-3 border-b-2 border-slate-400 sticky top-0 z-50 bg-black">
        <h1 className="font-bold text-xl">Profile</h1>
      </div>
      <div className="p-4 flex flex-col space-y-3 items-center">
        <from className="flex space-x-2 border-b-[1px] border-slate-500 p-3">
          <input
            className="h-10 bg-transparent min-w-[16rem] rounded-full outline-none text-md p-2 font-semibold border-[1px] border-white"
            placeholder="Change The Name"
            maxLength={15}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
            onClick={() => changeName()}
            className="p-1 bg-white text-black rounded-md"
            type="submit"
          >
            Change
          </button>
        </from>
        <h1>You need to mint an image to change your profile image</h1>
      </div>
    </div>
  );
}

export default Settings;
