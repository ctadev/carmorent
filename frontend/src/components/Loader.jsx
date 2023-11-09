import React from "react";
import { HiArrowPath } from "react-icons/hi2";

const Loader = () => {
  return (
    <main className="w-full flex items-center justify-center mt-12">
      <div className="animate-spin">
        <HiArrowPath className="h-[50px] w-[50px]"/>
      </div>
    </main>
  );
};

export default Loader;
