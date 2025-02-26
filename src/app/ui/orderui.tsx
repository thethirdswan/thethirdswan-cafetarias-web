"use client";

import { Card, CardContent } from "@mui/material";
import { useContext, useState } from "react";
import { OrderContext } from "../lib/context";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function OrderForm() {
    const [hideTimeInput, setHideTimeInput] = useState(false)
    const [waktu, setWaktu] = useState("Sekarang")
    const [catatan, setCatatan] = useState("Tidak ada")
    let { order, updateTime, updateNote } = useContext(OrderContext)

    function sendOrderToVerify() {
        if (order.length == 0) {
            toast("Anda belum menambahkan menu!");
            return
        }
        updateTime(waktu);
        updateNote(catatan);
        redirect("/pesan/review");
    }
    return (
        <Card className="mx-[24.707vw] mb-10">
                <CardContent>
                    <p>Diantar:</p>
                    <input className="mr-2" type="radio" name="waktu" value="Sekarang" id="sekarang" onClick={() => {setHideTimeInput(false); setWaktu("Sekarang");}} defaultChecked/>
                    <label htmlFor="sekarang" className="mr-6">Sekarang</label>
                    <input className="mr-2" type="radio" name="waktu" value="Pada waktu:" id="padawaktu" onClick={() => {setHideTimeInput(true);}}/>
                    <label htmlFor="padawaktu">Pada waktu:</label><br/>
                    {
                        hideTimeInput && <input type="text" name="waktupengiriman" className="border mr-2" placeholder="Waktu makanan dikirim" onChange={(e) => setWaktu("Jam " + e.target.value)}/>
                    }
                    <p>Catatan</p>
                    <input type="text" name="catatan" className="border mr-2" placeholder="Tidak ada" onChange={(e) => setCatatan(e.target.value)}/>
                    <button className="bg-sky-600 p-2" onClick={sendOrderToVerify}>Pesan</button>
                </CardContent>
            </Card>
    )
}