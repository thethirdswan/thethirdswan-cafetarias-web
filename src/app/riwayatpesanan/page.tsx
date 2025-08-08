import { redirect } from "next/navigation"
import { auth } from "../../../auth"
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { Suspense } from "react";
import Loading from "../ui/loadingSkeletons/loading";
import DeleteButton from "../ui/deletebutton";

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
            <Card className="md:mx-[24.707vw] mb-2" key={order._id}>
                <CardContent>
                    <p>Waktu Pemesanan: {order.waktuPemesanan}</p>
                    <p>Pesanan:</p>
                    {itemNodes}
                    <hr/>
                    <p>Catatan: {order.catatan}</p>
                    <p>Status: {order.status}</p>
                    <p>Metode pembayaran: {order.metodePembayaran}</p>
                    <p>Pembayaran lunas: {!order.isPaid ? "Belum" : "Sudah"}</p>
                </CardContent>
                <CardActions className="flex flex-row-reverse">
                    <DeleteButton orderId={order["_id"]}/>
                </CardActions>
            </Card>
        )
    })
    if (orderNodes.length == 0) {
        return (
            <main>
                <h2 className="text-center text-lg">Riwayat Pesanan</h2>
                <p className="text-center">Anda belum pernah memesan. Buatlah pesanan!</p>
            </main>
        )
    }
    return (
        <main>
            <h2 className="text-center text-lg">Riwayat Pesanan</h2>
            <Suspense fallback={<Loading/>}>
                {orderNodes}
            </Suspense>
        </main>
    )
}