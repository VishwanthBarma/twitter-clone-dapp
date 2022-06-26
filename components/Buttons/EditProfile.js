import Link from "next/link";
import React from "react";

function EditProfile() {
  return (
    <div className="border-[1px] p-2 px-4 border-white rounded-full cursor-pointer hover:bg-white hover:text-black active:opacity-80">
      <Link href={"/settings"} passHref>
        <h1 className="font-semibold">Edit Profile</h1>
      </Link>
    </div>
  );
}

export default EditProfile;
