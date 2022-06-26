import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import FinishedState from "./FinishedState";
import InitialState from "./InitialState";
import LoadingState from "./LoadingState";

function ProfileImageMinter() {
  const { currentUser, currentAccount } = useContext(TwitterContext);
  const router = useRouter();

  const [status, setStatus] = useState("initial");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const mint = () => {};

  const modalChildren = (modalStatus = status) => {
    switch (modalStatus) {
      case "initial":
        return (
          <InitialState
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        );
      case "loading":
        return <LoadingState />;

      case "finished":
        return <FinishedState />;

      default:
        router.push("/");
        setAppStatus("error");
        break;
    }
  };

  return <div>{modalChildren(status)}</div>;
}

export default ProfileImageMinter;
