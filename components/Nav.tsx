import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className=" px-3 border-b-[1px] border-r-[rgb(29,31,36)] flex  sticky backdrop-blur-xl flex-col right-0 left-0 top-0 ">
      <div className="hidden sm:block">
        <p className="text-2xl font-bold px-4 py-3">Home</p>
      </div>
      <div className="flex h-16 items-center justify-between sm:hidden ">
        <Image
          className="w-11 rounded-full"
          src="/logo.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Image
          className="w-11 rounded-full"
          src="/logo.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />

        <p className="rounded-full w-11 border-none h-11"></p>
      </div>
      <div className="flex items-center justify-around py-4 ">
        <p>For you</p>
        <p>Following</p>
      </div>
    </div>
  );
};

export default Nav;
