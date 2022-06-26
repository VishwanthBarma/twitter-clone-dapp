import React from "react";
import { format } from "timeago.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

function TweetPost({ data }) {
  return (
    <div className="p-4 flex flex-col border-b-2 border-neutral-700">
      {/* Header */}
      <div className="flex space-x-2">
        <div className="h-12 w-12 rounded-full flex justify-center items-center overflow-hidden">
          <img className="shrink-0" src={data.author.profileImage}></img>
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-2 items-center">
            <h1 className="font-semibold">{data.author.name}</h1>
            <h1 className="text-sm text-slate-300">
              • {format(new Date(data.timestamp).getTime())}
            </h1>
          </div>
          <h1 className="text-sm text-slate-500">
            @{data.author.walletAddress.slice(1, 6)}...
            {data.author.walletAddress.slice(30)}
          </h1>
        </div>
      </div>
      {/* caption */}
      <div className="p-2 px-10">
        <h1 className="">{data.tweet}</h1>
      </div>

      {/* likes comments and star's */}
      <div className="flex p-4 justify-around cursor-default">
        <div className="flex space-x-1">
          <AiOutlineHeart className="h-6 w-6" />
          <h1>3</h1>
        </div>
        <div className="flex space-x-1">
          <FaRegComment className="h-5 w-5" />
          <h1>3</h1>
        </div>
        <div className="flex space-x-1">
          <BsBookmarkHeart className="h-5 w-5" />
          <h1>3</h1>
        </div>
      </div>
    </div>
  );
}

export default TweetPost;
