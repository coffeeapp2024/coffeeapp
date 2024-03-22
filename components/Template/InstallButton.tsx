"use client";

import { useState, useEffect, useRef } from "react";

function InstallButton() {
  const [showButton, setShowButton] = useState(true);
  const deferredPromptRef = useRef<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      deferredPromptRef.current = e;

      // Check if the app is already installed
      if (window.matchMedia("(display-mode: standalone)").matches) {
        // App is already installed, hide the button
        setShowButton(false);
        console.log("App is already installed");
        return;
      }

      // Show the install button
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
    if (deferredPromptRef.current) {
      // Prompt installation
      deferredPromptRef.current.prompt();

      // Wait for the user to respond to the prompt
      deferredPromptRef.current.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
          // Hide the button after installation
          setShowButton(false);
        } else {
          console.log("App installation declined");
        }
      });
    }
  };

  if (!showButton) {
    return null; // If the button should not be shown, return null
  }

  return (
    <button
      className="absolute left-1/2 top-1/2  p-5 text-white bg-black"
      onClick={handleInstallButtonClick}
    >
      Install App
    </button>
  );
}

export default InstallButton;
