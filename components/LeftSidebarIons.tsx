"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPencilSquare } from "react-icons/bs";
import { sidebarElement } from "@/data";
import useRegisterModel from "./hooks/useRegisterModel";
import LogoutModel from "./LogoutButton";
import LogoutButton from "./LogoutButton";

const LeftSidebarIons = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    setShowConfirmation(true);
  };
  const registerModel = useRegisterModel();
  return (
    <div>
      <div className="xl:hidden sm:flex hidden justify-between w-[4rem] mx-3 pt-4 pb-4  border-r-[2px] border-r-[rgb(29,31,36)] h-[100vh] flex-col">
        <div className="flex flex-col justify-center items-center">
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
                <div className="flex gap-5   px-4 py-3 justify-center  rounded-full hover:bg-[rgb(22,24,28)]">
                  {d.name === "Varified" ? (
                    <Image
                      className="w-9 h-6   rounded-full"
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
                </div>
              </Link>
            ))}
          </div>
          <div
            onClick={() => registerModel.onOpen()}
            className="w-14 h-14 rounded-full items-center bg-blue-400 hover:opacity-90 flex justify-center"
          >
            <BsPencilSquare size={28} />
          </div>
        </div>

        {showConfirmation && (
          <LogoutButton setShowConfirmation={setShowConfirmation} />
        )}

        <div
          onClick={handleClick}
          className="flex items-center w-full hover:bg-slate-900 rounded-full px-1 py-2"
        >
          <Image
            className="w-11 rounded-full"
            src="/logo.webp"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebarIons;
