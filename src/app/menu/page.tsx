import Image from "next/image";
import { Item } from "../lib/types";
import imageFetch from "../lib/imagefetch";
import { Card, CardContent } from "@mui/material";

export default async function Menu() {
  const foods = await fetch(`${process.env.SERVER_URL}/makanan`).then((res) =>
    res.json()
  );
  const drinks = await fetch(`${process.env.SERVER_URL}/minuman`).then((res) =>
    res.json()
  );
  let foodList: JSX.Element[] = await Promise.all(
    foods.map(async (item: Item) => {
      return (
        <div key={item.nama} className="my-2 w-[75%] mx-auto">
          <Card>
            <CardContent className="md:flex md:items-start py-2">
              <div>
                <Image
                  src={await imageFetch(
                    item.nama.toLowerCase().replace(/\s+/g, ""),
                    "makanan"
                  )}
                  alt={item.nama}
                  width={150}
                  height={150}
                  className="md:float-right mx-auto md:mr-2"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg">{item.nama}</h3>
                <p>{item.deskripsi}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    })
  );
  let drinkList: JSX.Element[] = await Promise.all(
    drinks.map(async (item: Item) => {
      return (
        <div key={item.nama} className="my-2 w-[75%] mx-auto">
          <Card>
            <CardContent className="md:flex md:items-start py-2">
              <div>
                <Image
                  src={await imageFetch(
                    item.nama.toLowerCase().replace(/\s+/g, ""),
                    "minuman"
                  )}
                  alt={item.nama}
                  width={150}
                  height={150}
                  className="md:float-right mx-auto md:mr-2"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg">{item.nama}</h3>
                <p>{item.deskripsi}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    })
  );
  return (
    <main>
      <h1 className="text-xl text-center">Menu Lengkap</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-[50%]">
          <h2 className="text-lg text-center">Makanan</h2>
          {foodList}
        </div>
        <div className="md:w-[50%]">
          <h2 className="text-lg text-center">Minuman</h2>
          {drinkList}
        </div>
      </div>
    </main>
  );
}
