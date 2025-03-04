self.addEventListener("push", (event) => {
    const data = event.data.json();
    const title = data.title;
    const body = data.body;
    const icon = data.icon;
  
    const notificationOptions = {
      body: body,
      tag: "bsiduta",
      icon: icon,
      data: {
        url: "https://bsiduta-web.vercel.app/",
      },
    };
  
    self.registration.showNotification(title, notificationOptions);
  });