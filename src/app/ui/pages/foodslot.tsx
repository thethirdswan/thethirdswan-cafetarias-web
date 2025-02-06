import { Button, Card, CardActions, CardContent } from "@mui/material"
import { JSX } from "react"

export default async function FoodSlot() {
    const res = await fetch(`${process.env.SERVER_URL}/makanan`)
    const json = await res.json()
    let foods: JSX.Element[] = []
    json.forEach((item: any) => {
        foods.push(
            <Card className="bg-slate-300 mb-2">
                <CardContent>
                    <h4>{item.nama}</h4>
                    <p>Harga: Rp{item.harga}</p>
                    <p>Stok: {item.stok}</p>
                </CardContent>
                <CardActions>
                    <Button disabled variant="contained">-</Button>
                    <p>0</p>
                    <Button variant="contained">+</Button>
                </CardActions>
            </Card>
        )
    })
    return foods
}