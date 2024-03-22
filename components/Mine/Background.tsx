import { useMinePageContentStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

function Background() {
  const [bg, setBg] = useState("/bg/mine-bg.jpg");
  const { minePageContent } = useMinePageContentStore();
  const { backgrounds } = minePageContent ?? {};

  useEffect(() => {
    if (!backgrounds) return;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      setBg(backgrounds[randomIndex]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [backgrounds]);

  return (
    <div className="fixed top-0 w-full max-w-screen-sm h-screen -z-50">
      <Image
        src={bg}
        fill={true}
        sizes="(max-width: 640px) 100vw, 640px"
        alt="Background Image"
        className="object-cover"
      />
    </div>
  );
}

export default Background;
