import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className=" h-full flex flex-col">
      <div className=" h-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className=" object-contain" />
      </div>
      <div className=" h-1/2">2</div>
    </div>
  );
};

export default Home;
