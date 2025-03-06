importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCdF_75DVGLd77b1ZBbtWnFMvBsaV4jCT8",
    authDomain: "bsiduta-47488.firebaseapp.com",
    projectId: "bsiduta-47488",
    storageBucket: "bsiduta-47488.firebasestorage.app",
    messagingSenderId: "1002025429734",
    appId: "1:1002025429734:web:e9cb7a08cab30be8c36927"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  return self.clients.claim();
});

self.addEventListener("push", (event) => {
  console.log("Push event received:", event);

  const data = event.data ? event.data.json() : {};
  const title = data.notification?.title || "New Notification";
  const options = {
    body: data.notification?.body || "You have a new message",
    icon: "/favicon.ico",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});