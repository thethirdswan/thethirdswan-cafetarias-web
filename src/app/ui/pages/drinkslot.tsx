import { Button, Card, CardActions, CardContent } from "@mui/material"
import { JSX } from "react"

export default async function DrinkSlot() {
    const res = await fetch("https://bsiduta-server.onrender.com/minuman")
    const json = await res.json()
    let drinks: JSX.Element[] = []
    json.forEach((item: any) => {
        drinks.push(
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
    return drinks
}