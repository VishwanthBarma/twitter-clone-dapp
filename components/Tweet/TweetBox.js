import { ThreeBounce } from "better-react-spinkit";
import React, { useContext, useState } from "react";
import { TwitterContext } from "../../context/TwitterContext";
import { client } from "../../lib/client";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const { currentAccount, currentUser } = useContext(TwitterContext);
  const [loading, setLoading] = useState(false);

  const postTweet = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!tweetMessage) return;

    const tweetId = `${currentAccount}_${Date.now()}`;
    const tweetDoc = {
      _type: "tweets",
      _id: tweetId,
      tweet: tweetMessage,
      timestamp: new Date(Date.now()).toISOString(),
      author: {
        _key: tweetId,
        _type: "reference",
        _ref: currentAccount,
      },
    };

    await client.createIfNotExists(tweetDoc);

    await client
      .patch(currentAccount)
      .setIfMissing({ tweets: [] })
      .insert("after", "tweets[-1]", [
        {
          _key: tweetId,
          _ref: tweetId,
          _type: "reference",
        },
      ])
      .commit()
      .then(() => {
        console.log("Updated in Tweets of User Account");
      })
      .catch((err) => {
        console.error("Oh no, the update failed: ", err.message);
      });

    setTweetMessage("");
    setLoading(false);
  };

  return (
    <div className="flex p-4 flex-col space-y-2 border-b-2 border-neutral-700">
      <div className="flex space-x-3">
        <div className="bg-white shrink-0 h-12 w-12 rounded-full flex justify-center items-center overflow-hidden">
          <img className="shirink-0" src={currentUser.profileImage}></img>
        </div>
        <form className="w-full flex flex-col space-y-2">
          <textarea
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            className="w-full bg-transparent h-20 outline-none text-lg font-semibold"
            placeholder="What's happening ?"
          ></textarea>
          {!loading ? (
            <button
              disabled={!tweetMessage}
              onClick={(e) => postTweet(e)}
              type="submit"
              className="bg-sky-500 h-9 w-20 rounded-full self-end disabled:opacity-60"
            >
              send
            </button>
          ) : (
            <ThreeBounce size={10} color="orange" />
          )}
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
