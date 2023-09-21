import React from "react";
import Search from "./Search";
import { rigtData } from "@/data";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="w-[24rem] px-3 py-3  flex-col gap-5  hidden lg:flex  h-[100vh]">
      <Search />
      <div className="bg-[rgb(22,24,28)] rounded-2xl flex flex-col px-3 py-4 gap-2">
        <h1 className="text-2xl font-bold">Who to follow</h1>
        {rigtData.map((d) => (
          <div className="flex justify-between  w-full h-14 items-center ">
            <div className="flex flex-row justify-center  gap-2">
              <Image
                className="w-11 h-11 shadow-sm  rounded-full object-cover"
                src={`/${d.image}`}
                alt={d.name}
                width={500}
                height={500}
              />

              <div className="flex flex-col">
                <h4 className="text-[16px] font-bold">{d.name}</h4>
                <h4 className="text-gray-400 font-normal text-[16px]">
                  {d.data}
                </h4>
              </div>
            </div>

            <div className=" flex items-center justify-center hover:bg-opacity-80 w-20 text-center h-8 rounded-full bg-white text-black px-1 ">
              <h3 className=" text-center font-bold text-black">Follow</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
