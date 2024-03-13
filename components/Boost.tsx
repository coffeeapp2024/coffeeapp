import Image from "next/image";
import React from "react";

function Boost() {
  return (
    <div className="relative active:scale-95 duration-75 transition-transform">
      <div className="bg-white shadow-sm rounded-[30px] aspect-[6/7] flex items-center justify-center overflow-hidden">
        <Image
          src={
            "https://i.pinimg.com/originals/1b/87/43/1b8743b8a37c4a7f1e55bf6a19fb7a23.gif"
          }
          layout={"responsive"}
          height={400}
          width={100}
          alt="boost"
          unoptimized={true}
          className="scale-[1.6]"
        />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 shadow-lg">
        <div className="bg-gradient-to-tr from-amber-300 to-amber-400 border-neutral-800 px-4 py-2 rounded-xl text-nowrap font-bold text-xl">
          Boost
        </div>
        <div className="absolute bg-neutral-950 w-full h-full rounded-xl -z-10 top-[3px] left-1 "></div>
      </div>
    </div>
  );
}

export default Boost;
