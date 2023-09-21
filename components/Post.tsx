import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex gap-3 flex-row w-full p-3">
      <div>
        <Image
          className="w-14  rounded-full"
          src="/profile3.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <p className="font-bold">Sunil Reddy</p>
            <p className="text-gray-400"> 0xSunilReddy</p>
            <p className="text-gray-400"> 4h</p>
          </div>

          <div>
            <p>
              Staring a new journey.... Thank you @warikoo and @AliAbdaal for
              your recommendations ❤️
            </p>
          </div>
        </div>

        <div>
          <Image
            className="w-full h-full rounded-sm "
            src="/profile3.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <p>likes</p>
          <p>retweet</p>
          <p>comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
