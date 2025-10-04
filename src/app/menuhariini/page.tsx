import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import imageFetch from "../lib/imagefetch";

export default async function MenuHariIni() {
  const menuHariIni = await fetch(`${process.env.SERVER_URL}/menuhariini`).then(
    (res) => res.json()
  );
  const nodeMenuHariIni: JSX.Element[] = await Promise.all(
    menuHariIni.current.menu.map(async (item: any) => {
      return (
        <div key={item} className="flex items-start my-2">
          <Image
            src={await imageFetch(item[0].toLowerCase().replace(/\s+/g, ""), item[1].toLowerCase())}
            alt={item}
            width={150}
            height={150}
          />
          <span className="px-2">{item[0]}</span>
        </div>
      );
    })
  );
  return (
    <main>
      <p className="text-center">
        Menu Hari Ini ({menuHariIni.current.tanggal}):{" "}
      </p>
      <Card className="md:mx-[24.707vw] mx-2">
        <CardContent>
          <ul>{nodeMenuHariIni}</ul>
        </CardContent>
      </Card>
    </main>
  );
}
