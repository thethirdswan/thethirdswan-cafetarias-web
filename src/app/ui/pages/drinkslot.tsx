import { Card, CardContent } from "@mui/material"
import { JSX } from "react"
import Counters from "../counters"

export default async function DrinkSlot() {
    const res = await fetch(`${process.env.SERVER_URL}/minuman`).then((res) => res.json())
    let drinks: JSX.Element[] = []
    res.forEach((item: any) => {
        drinks.push(
            <Card className="!bg-slate-300 mb-2">
                <CardContent>
                    <h4>{item.nama}</h4>
                    <p>Harga: Rp{item.harga}</p>
                    <p>Stok: {item.stok}</p>
                    <Counters item={item}/>
                </CardContent>
            </Card>
        )
    })
    return drinks
}