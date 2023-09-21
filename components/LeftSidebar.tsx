import Image from "next/image";
import React from "react";
import Link from "next/link";
import { sidebarElement } from "@/data";

const LeftSidebar = () => {
  return (
    <div className="hidden xl:flex justify-between w-[16.5rem] mx-3 pt-4 pb-4  border-r-[2px] border-r-[rgb(29,31,36)] h-[100vh] flex-col">
      <div className="flex flex-col">
        <div>
          <Image
            className="w-11"
            src="/logo.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="py-4">
          {sidebarElement.map((d, index) => (
            <Link
              href={d.route}
              key={index}
              className="flex gap-3  rounded-3xl "
            >
              <div className="flex gap-5 pr-5  pl-2  py-[11px] rounded-3xl hover:bg-[rgb(22,24,28)]">
                {d.name === "Varified" ? (
                  <Image
                    className="w-9 h-6 -ml-2 rounded-full"
                    src="/logo.webp"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                ) : (
                  <d.icon
                    size={28}
                    color="white"
                    className="hover:scale-105 transition-transform duration-300 ease-out"
                  />
                )}

                <h1 className="text-center text-[19px]">{d.name}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <button className="h-12  w-56 rounded-full bg-blue-400 hover:opacity-90  ">
            Post
          </button>
        </div>
      </div>

      <div className="flex gap-4 items-center w-full hover:bg-slate-900 rounded-full px-1 py-2">
        <Image
          className="w-11 h-11 rounded-full"
          src="/profile3.jpeg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div>
          <p>Sunil Reddy</p>
          <p className="text-gray-400">0xSunilReddy</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
