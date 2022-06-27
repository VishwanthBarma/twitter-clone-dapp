import React, { useContext, useEffect, useState } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import ProfileTweet from "./ProfileTweet";

function ProfileTweets() {
  const { currentUser } = useContext(TwitterContext);
  const [tweets, setTweets] = useState([]);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    if (!currentUser) return;

    setTweets(currentUser.tweets);
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    });
  }, [currentUser]);

  return (
    <div>
      {tweets?.map((tweet) => (
        <ProfileTweet key={tweet.timestamp} tweet={tweet} author={author} />
      ))}
    </div>
  );
}

export default ProfileTweets;
