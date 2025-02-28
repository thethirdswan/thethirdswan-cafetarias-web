import { redirect } from "next/navigation"
import { auth } from "../../../auth"
import { Card, CardContent } from "@mui/material";

export default async function RiwayatPesanan() {
    const session = await auth()
    if (!session) redirect("/masuk");
    const orders = await fetch(`${process.env.SERVER_URL}/riwayatpesanan/${session.user?.username}`,{
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
    const orderNodes : JSX.Element[] = []
    orders.forEach((order: any) => {
        const itemNodes : JSX.Element[] = []
        const items = Object.keys(order.pesanan)
        for (const key of items) {
            itemNodes.push(
                <p key={key}>{key}: {order.pesanan[key]}</p>
            )
        }
        orderNodes.push(
            <Card className="md:mx-[24.707vw] mb-2" key={order.waktuPemesanan}>
                <CardContent>
                    <p>Waktu Pemesanan: {order.waktuPemesanan}</p>
                    <p>Pesanan:</p>
                    {itemNodes}
                    <p>Catatan: {order.catatan}</p>
                </CardContent>
            </Card>
        )
    })
    return (
        <main>
            <h2 className="text-center">Riwayat Pesanan</h2>
            {orderNodes}
        </main>
    )
}