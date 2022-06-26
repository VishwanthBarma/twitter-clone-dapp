import React from "react";
import { ThreeBounce } from "better-react-spinkit";

const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
};

function LoadingState() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Minting is in progress...</div>
      <ThreeBounce size={30} color="orange" />
    </div>
  );
}

export default LoadingState;
