import React from "react";

function MainButton({ text, className }: { text: string; className?: string }) {
  return (
    <div className="relative z-10 active:scale-95 transition-transform">
      <div
        className={`${className} bg-gradient-to-tr from-amber-300 to-amber-400 h-12  px-5 flex items-center justify-center rounded-[16px] text-xl text-neutral-800 font-semibold text-nowrap border-[1px] border-neutral-800 -z-10 shadow-lg `}
      >
        {text}
        <div className="absolute w-full h-full -z-20 top-[3px] left-1 rounded-[16px] bg-neutral-800"></div>
      </div>
    </div>
  );
}

export default MainButton;
