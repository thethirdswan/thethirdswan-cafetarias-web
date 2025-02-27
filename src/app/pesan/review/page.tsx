"use client"

import { OrderContext } from "@/app/lib/context"
import orderAssemble from "@/app/lib/orderassemble"
import { Card, CardContent } from "@mui/material"
import { redirect } from "next/navigation"
import { useContext } from "react"
import { toast } from "sonner"

export default function OrderReview() {
    const { order, time, note, resetOrder } = useContext(OrderContext)
    let total = 0;
    if (order.length == 0) {
        redirect("/pesan")
    }
    let items: JSX.Element[] = []
    order.forEach((item: any) => {
        items.push(
            <p key={item.nama}>{item.nama}: {item.jumlah}</p>
        )
        total += item.harga * item.jumlah
    })
    return (
        <Card className="md:mx-[24.707vw] mx-2">
            <CardContent>
                <p className="text-center">Detail pesanan anda:</p>
                <p>Waktu diantar: {time}</p>
                <p>Pesanan:</p>
                {items}
                <hr/>
                <p>Catatan: {note}</p>
                <p>Perkiraan total: Rp{total}</p>
                <p className="text-center">Apakah ini benar?</p>
                <div className="grid grid-cols-2">
                    <button onClick={() => resetOrder()}>Tidak</button>
                    <button onClick={async () => {toast("Pesanan sedang diproses! Mohon ditunggu."); await orderAssemble(order, time, note); resetOrder(); redirect("/")}}>Ya</button>
                </div>
            </CardContent>
        </Card>
    )
}