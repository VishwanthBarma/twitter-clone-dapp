import React from "react";
import User from "../Widgets/User";

function Widgets() {
  return (
    <div className="p-2 flex flex-col items-center justify-center space-y-4 lg:pr-[8rem] lg:pl-2">
      <input
        className="p-1 px-2 rounded-full outline-none font-semibold"
        placeholder="search"
      ></input>
      <div className="p-2 bg-neutral-900 rounded-lg w-full flex flex-col items-center space-y-2">
        <h1 className="text-white font-semibold">Suggested Users</h1>
        <div className="flex flex-col space-y-1 w-full">
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
