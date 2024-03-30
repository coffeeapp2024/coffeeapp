import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

function AddToHomeScreen() {
  const [isIOS, setIsIOS] = useState(false);
  const [isPWAInstalled, setIsPWAInstalled] = useState(false); // Thêm state để kiểm tra PWA đã được cài đặt hay chưa

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Kiểm tra nếu đã cài đặt PWA
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setIsPWAInstalled(true);
    });

    // Check if running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPWAInstalled(true); // Hide the button if running in standalone mode
    }

    // Xoá event listener khi component unmount
    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  return (
    <>
      {isIOS && !isPWAInstalled && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 w-fit  text-sm bg-background text-neutral-800 px-5 py-2 rounded-3xl flex flex-col items-center justify-center">
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
