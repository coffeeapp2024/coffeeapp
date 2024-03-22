import React, { useEffect } from "react";

function InstallButton() {
  useEffect(() => {
    let deferredPrompt: any;

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;

      // Check if the app is already installed
      if (window.matchMedia("(display-mode: standalone)").matches) {
        // App is already installed
        console.log("App is already installed");
        return;
      }

      // Show install button
      const installButton = document.createElement("button");
      installButton.textContent = "Install App";
      installButton.classList.add(
        "fixed",
        "top-10",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
        "z-50",
        "px-4",
        "py-2",
        "bg-blue-500",
        "text-white",
        "rounded-md",
        "shadow-lg",
        "cursor-pointer"
      );

      installButton.addEventListener("click", () => {
        // Prompt installation
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === "accepted") {
            console.log("App installed");
            // Hide install button after installation
            installButton.style.display = "none";
          } else {
            console.log("App installation declined");
          }
        });
      });

      document.body.appendChild(installButton);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return null;
}

export default InstallButton;
