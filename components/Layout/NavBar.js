import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlineHome, AiFillHome, AiOutlineTwitter } from "react-icons/ai";
import {
  IoPersonOutline,
  IoPerson,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { TwitterContext } from "../../context/TwitterContext";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Link from "next/link";
import ProfileImageMinter from "../MintingModel/ProfileImageMinter";

function NavBar() {
  const { currentUser, currentAccount } = useContext(TwitterContext);
  const router = useRouter();
  const navData = [
    {
      title: "Home",
      path: "/",
      icon: <AiOutlineHome className="h-6 w-6" />,
      active: <AiFillHome className="h-6 w-6" />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <IoPersonOutline className="h-6 w-6" />,
      active: <IoPerson className="h-6 w-6" />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline className="h-6 w-6" />,
      active: <IoSettings className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-neutral-900 text-white lg:pl-[8rem]">
      <div className="h-screen flex flex-col justify-between">
        <div className="flex flex-col space-y-5 md:p-3 lg:p-5 p-3">
          <div className="flex items-center justify-center">
            <AiOutlineTwitter className="h-12 w-12 md:h-14 md:w-14" />
          </div>

          <div className="flex flex-col space-y-2 justify-center ml-auto mr-auto">
            {navData.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <a>
                  <div className="flex space-x-2 items-center justify-start hover:bg-neutral-800 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40">
                    {router.pathname.split("/")[1] === item.path.split("/")[1]
                      ? item.active
                      : item.icon}
                    <h1
                      className={`${
                        router.pathname.split("/")[1] ===
                          item.path.split("/")[1] && "font-bold"
                      } hidden md:inline`}
                    >
                      {item.title}
                    </h1>
                  </div>
                </a>
              </Link>
            ))}

            <div className="flex md:hidden space-x-2 items-center justify-start bg-sky-500 hover:bg-neutral-800 active:bg-sky-600 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40">
              <FiSend className=" h-5 w-5" />
            </div>
          </div>

          <button
            className="hidden md:inline bg-sky-500 p-2 rounded-full hover:opacity-80 active:opacity-100 font-semibold"
            onClick={() =>
              router.push(`${router.pathname}/?mint=${currentAccount}`)
            }
          >
            Mint
          </button>
        </div>

        <Link href={"/profile"} passHref>
          <a>
            <div className="md:p-3 mb-10 cursor-pointer flex items-center justify-center space-x-1">
              <div
                className={`${
                  currentUser.isProfileImageNft && "border-4 border-orange-600"
                } bg-white shrink-0 h-10 w-10 rounded-full flex justify-center items-center overflow-hidden`}
              >
                <img className="shirink-0" src={currentUser.profileImage}></img>
              </div>
              <div className="hidden md:inline overflow-x-scroll">
                <h1 className="font-semibold text-sm">{currentUser.name}</h1>
                <h1 className="text-[12px] text-slate-500">
                  @{currentAccount.slice(0, 3)}...{currentAccount.slice(39)}
                </h1>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={{
          content: {
            top: "30%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            padding: 0,
            border: "none",
            backgroundColor: "",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backgroundColor: "#334250a7",
          },
        }}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  );
}

export default NavBar;
