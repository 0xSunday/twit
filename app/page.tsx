import BottonNav from "@/components/BottonNav";
import LeftSidebar from "@/components/LeftSidebar";
import LeftSidebarIons from "@/components/LeftSidebarIons";
import MiddleSection from "@/components/MiddleSection";
import RightSection from "@/components/RightSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex z-0 flex-auto justify-center items-center mx-auto w-full ">
      <BottonNav />
      <LeftSidebar />
      <LeftSidebarIons />
      <MiddleSection />
      <RightSection />
    </div>
  );
}
