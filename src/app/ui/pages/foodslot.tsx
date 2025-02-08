import { Card, CardContent } from "@mui/material"
import { JSX } from "react"
import Counters from "../counters"

export default async function FoodSlot() {
    const res = await fetch(`${process.env.SERVER_URL}/makanan`).then((res) => res.json())
    let foods: JSX.Element[] = []
    res.forEach((item: any) => {
        foods.push(
            <Card className="bg-slate-300 mb-2">
                <CardContent>
                    <h4>{item.nama}</h4>
                    <p>Harga: Rp{item.harga}</p>
                    <p>Stok: {item.stok}</p>
                    <Counters item={item}/>
                </CardContent>
            </Card>
        )
    })
    return foods
}