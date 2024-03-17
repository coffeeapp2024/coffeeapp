import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const bgList = [
  "/bg/bg1.jpg",
  "/bg/bg7.jpg",
  // "/bg/bg6.jpg",
  "/bg/bg5.jpg",
  "/bg/bg8.jpg",
  "/bg/bg10.jpg",
];

function Background() {
  const [bg, setBg] = useState(bgList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bgList.length);
      setBg(bgList[randomIndex]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

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
