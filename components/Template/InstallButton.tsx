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
      installButton.style.position = "fixed";
      installButton.style.top = "50px";
      installButton.style.left = "50%";
      installButton.style.transform = "translateX(-50%)";
      installButton.style.zIndex = "9999";
      installButton.style.padding = "10px 20px";
      installButton.style.color = "white";
      installButton.style.backgroundColor = "#007bff";
      installButton.style.border = "none";
      installButton.style.borderRadius = "50px";
      installButton.style.cursor = "pointer";

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
