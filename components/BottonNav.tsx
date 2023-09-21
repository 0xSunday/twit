import React from "react";
import { bottemNavElement } from "@/data";
import Link from "next/link";
const BottonNav = () => {
  return (
    <div className="px-3 bg-black  p-2 z-20 border-t-[1px] items-center  fixed bottom-0 left-0 right-0 flex  sm:hidden w-full justify-around ">
      {bottemNavElement.map((d, i) =>
        d.name === "Tweet" ? (
          <div
            key={i}
            className="flex  gap-3 px-3 py-3 rounded-full  bg-blue-400 hover:bg-opacity-75 "
          >
            <d.icon
              size={30}
              color="white"
              className="hover:scale-105 transition-transform  "
            />
          </div>
        ) : (
          <Link
            href={d.route}
            key={i}
            className="flex  gap-3 px-3 py-3 rounded-full hover:bg-[rgb(22,24,28)]   "
          >
            <d.icon
              size={25}
              color="white"
              className="hover:scale-105 transition-transform"
            />
          </Link>
        )
      )}
    </div>
  );
};

export default BottonNav;
