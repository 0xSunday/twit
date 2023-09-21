"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Botton from "./Botton";

interface ModelProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  titleImage?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLable: string;
  disabled?: boolean;
}

const Model: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLable,
  disabled,
  titleImage,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onSubmit]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="flex justify-center items-center overflow-x-hidden 
      overflow-y-auto fixed  inset-0 z-50 outline-none focous:outline-none
       bg-emerald-950 bg-opacity-90
      "
    >
      <div className="relative w-full md:w-3/4 mx-auto lg:max-w-3xl h-full lg:h-auto">
        {/* content */}
        <div
          className=" h-full lg:h-auto border-0 rounded-lg shadow-lg relative
         flex flex-col w-full bg-black outline-none focus:outline-none"
        >
          {/* header */}

          <div className="flex flex-1 items-center justify-between p-10 rounded-t ">
            <button
              onClick={handleClose}
              className="  p-1 flex justify-center items-center  border-0 text-white hover:opacity-70 transition"
            >
              <AiOutlineClose />
            </button>

            <div className="flex items-center justify-center rounded-t ">
              <h3 className="font-bold text-3xl">{title}</h3>
            </div>
            <div>
              {titleImage && (
                <Image
                  className="w-11  rounded-full"
                  src={titleImage}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              )}
            </div>
          </div>

          {/* body */}
          <div className="relative p-10 flex-auto">{body}</div>

          {/* footer */}
          <div className="flex flex-col gap-2 p-10">
            <Botton
              
              lable={actionLable}
              secondary
              fullWidth
              large
              onClick={handleSubmit}
            />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
