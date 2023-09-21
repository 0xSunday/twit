import React from "react";
import Nav from "./Nav";
import Post from "./Post";

const MiddleSection = () => {
  return (
    <div className=" overflow-scroll no-scrollbar flex flex-col  sm:max-w-[650px] md:max-w-[580px] w-[100%]  border-r-[2px] border-r-[rgb(29,31,36)] h-[100vh]">
      <Nav />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MiddleSection;
