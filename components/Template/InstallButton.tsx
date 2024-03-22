"use client";

import React, { useEffect, useState, useRef } from "react";

function InstallButton() {
  const [showButton, setShowButton] = useState(false);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setShowButton(true);
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
      {true && (
        <button
          onClick={handleInstallButtonClick}
          className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-50"
        >
          Install App
        </button>
      )}
    </>
  );
}

export default InstallButton;
