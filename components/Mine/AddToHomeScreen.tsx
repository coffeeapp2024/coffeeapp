import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

function AddToHomeScreen() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
  }, []);

  return (
    <>
      {isIOS && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 w-fit  text-sm bg-white text-neutral-800 px-5 py-2 rounded-3xl flex flex-col items-center justify-center">
          <div className="flex items-center gap-x-[3px] text-nowrap">
            <span>Tap</span>
            <ArrowUpOnSquareIcon className="w-4 h-4 text-blue-500" />
            <span>{"->"}</span>
            <span className="font-bold ml-1">&#34;Add to Home Screen&#34;</span>
          </div>
          <span>to install this app</span>
        </div>
      )}
    </>
  );
}

export default AddToHomeScreen;
