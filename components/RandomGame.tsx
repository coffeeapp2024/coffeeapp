import Image from "next/image";
import React from "react";

function RandomGame() {
  return (
    <div className="col-span-2 relative active:scale-95 duration-75 transition-transform">
      <div className="shadow-lg rounded-[30px] aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={"/icons/game.gif"}
          layout={"responsive"}
          height={400}
          width={100}
          alt="boost"
          unoptimized={true}
          className="scale-[1.6]"
        />
        <Image
          src={"/icons/cases.gif"}
          layout={"responsive"}
          height={100}
          width={100}
          alt="boost"
          unoptimized={true}
          className="scale-[0.6] -translate-y-10 absolute"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 shadow-lg">
        <div className="bg-gradient-to-tr from-amber-300 to-amber-400 border-neutral-800 border-[1px] px-4 py-2 rounded-xl text-nowrap font-bold text-xl">
          Play
        </div>
        <div className="absolute bg-neutral-950 w-full h-full rounded-xl -z-10 top-[3px] left-1 "></div>
      </div>
    </div>
  );
}

export default RandomGame;
