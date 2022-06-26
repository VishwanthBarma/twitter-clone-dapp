import { useContext, useEffect } from "react";
import Image from "next/image";
import checkMark from "../../assets/check.png";
import { useRouter } from "next/router";

function FinishedState() {
  const router = useRouter();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Minting Successful!</div>
      <Image src={checkMark} alt="checkmark" height={100} width={100} />
      <div onClick={() => router.push("/")} className={style.closeButton}>
        Close
      </div>
    </div>
  );
}

export default FinishedState;
