import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      console.log("PWA was installed");
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (isInstalled || !showInstallPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
          Install App
        </h3>
        <p style={{ margin: "4px 0 0 0", fontSize: "14px", opacity: 0.9 }}>
          Add this app to your home screen for quick access
        </p>
      </div>
      <div style={{ display: "flex", gap: "8px", marginLeft: "16px" }}>
        <button
          onClick={handleDismiss}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0056b3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Later
        </button>
        <button
          onClick={handleInstallClick}
          style={{
            padding: "8px 16px",
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
