"use client";

import { useEffect } from "react";

export default function ServiceWorker() {
    const useRegisterServiceWorker = () => {
      useEffect(() => {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("/firebase-messaging-sw.js")
            .then((registration) => {
              console.log("Service Worker registered:", registration);
            })
            .catch((error) => {
              console.error("Service Worker registration failed:", error);
            });
        }
      }, []);
    };
    useRegisterServiceWorker();
    return null;
}
