"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";

type LogoutButtonProps = {
  setShowConfirmation: (show: boolean) => void; 
};

const LogoutButton = ({ setShowConfirmation }: LogoutButtonProps) => {

  const handleLogout = () => {
    signOut();
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };

  return (
    <div
      className="flex justify-center items-center overflow-x-hidden 
    overflow-y-auto fixed inset-0 z-50 outline-none focous:outline-none
     bg-emerald-950 bg-opacity-90 text-center text-white"
    >
      <div className="bg-black  p-5 rounded-lg relative text-center items-center justify-center w-full md:w-1/4 mx-auto lg:max-w-3xl  h-auto">
        <p className="pb-4 text-2xl">Are you sure you want to log out ?</p>
        <button
          onClick={handleConfirmLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Yes
        </button>
        <button
          onClick={() => setShowConfirmation(false)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
