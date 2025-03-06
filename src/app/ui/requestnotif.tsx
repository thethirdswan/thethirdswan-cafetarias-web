"use client"
import { messaging } from "@/app/lib/firebase";
import { getToken } from "firebase/messaging";
import { Button } from "@mui/material";
import updateToken from "../lib/updatetoken";
import { useSession } from "next-auth/react";

const NotificationButton = () => {
    const { data: session, update } = useSession()
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BGQu-gzm3qWqiPvyG8PFZTxc8idrZFpD02zfwVTqnlneQu-eCLfTmf6twiduYhePAKsfRFT__J9n19Pina81skk",
      });
      updateToken(token);
      update({ user: {
        _id: session?.user?._id,
        nama: session?.user?.nama,
        lokasi: session?.user?.lokasi,
        username: session?.user?.username,
        token: token,
        password: session?.user?.password,
        admin: session?.user?.admin,
    } })
    } else {
      console.error("Notification permission denied");
    }
  };

  return (
    <Button onClick={requestPermission}>
      Hidupkan Notifikasi
    </Button>
  );
};

export default NotificationButton;
