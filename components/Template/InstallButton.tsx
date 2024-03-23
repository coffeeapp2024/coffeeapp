"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState, useRef } from "react";

function InstallButton() {
  const [showButton, setShowButton] = useState(false);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      deferredPrompt.current = e;
      deferredPrompt.current.prompt();
      // setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallButtonClick = () => {
    if (deferredPrompt.current) {
      // Prompt installation
      deferredPrompt.current.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.current.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
          setShowButton(false);
        } else {
          console.log("App installation declined");
        }
      });
    }
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleInstallButtonClick}
          className="fixed top-28 left-1/2 -translate-x-1/2 rounded-3xl bg-neutral-900 text-white font-semibold py-3 px-6 z-50 flex items-center justify-center gap-x-2 shadow-sm active:scale-95 transition-transform"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          <span>Install App</span>
        </button>
      )}
    </>
  );
}

export default InstallButton;
