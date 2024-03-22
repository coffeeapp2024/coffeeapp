import React from "react";

function MainButton({ text }: { text: string }) {
  return (
    <div className="relative z-10 active:scale-95 transition-transform">
      <div
        className={`bg-gradient-to-tr from-amber-300 to-amber-400 h-11 px-4 flex items-center justify-center rounded-xl text-xl text-neutral-800 font-bold text-nowrap border-[1px] border-neutral-800 -z-10 shadow-lg`}
      >
        {text}
        <div className="absolute w-full h-full -z-20 top-[3px] left-1 rounded-xl bg-neutral-800"></div>
      </div>
    </div>
  );
}

export default MainButton;
