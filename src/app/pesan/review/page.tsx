"use client"

import { OrderContext } from "@/app/lib/context"
import orderAssemble from "@/app/lib/orderassemble"
import { Card, CardContent } from "@mui/material"
import { redirect } from "next/navigation"
import { useContext, useState } from "react"
import { toast } from "sonner"

export default function OrderReview() {
    const [qristext, showQristext] = useState(false)

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
                <p className="text-center">Metode pembayaran:</p>
                <div className="grid grid-cols-2 text-center">
                    <div>
                        <input type="radio" name="payment" id="cod" value="cod" onClick={() => showQristext(false)} defaultChecked />
                        <label htmlFor="cod"> Bayar di tempat</label>    
                    </div>
                    <div>
                        <input type="radio" name="payment" id="qris" value="qris" onClick={() => showQristext(true)}/>
                        <label htmlFor="qris"> QRIS</label>
                    </div>
                </div>
                {qristext && 
                    <p className="text-center">Anda akan diarahkan ke kode QR pembayaran setelah konfirmasi pesanan</p>
                }
                <p className="text-center">Apakah ini benar?</p>
                <div className="grid grid-cols-2">
                    <button onClick={() => resetOrder()}>Tidak</button>
                    <button onClick={async () => {
                            if (!qristext) {
                                toast("Pesanan sedang diproses! Mohon ditunggu."); 
                                await orderAssemble(order, time, note, "Bayar di tempat"); 
                                resetOrder(); 
                                redirect("/")
                            } else {
                                // placeholder for QRIS payment
                                redirect(`/pesan/bayar?payload=default`)
                            }
                        }
                    }>Ya</button>
                </div>
            </CardContent>
        </Card>
    )
}