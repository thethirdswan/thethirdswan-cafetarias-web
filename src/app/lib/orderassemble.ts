"use server";

import { auth } from "../../../auth";

export default async function orderAssemble(order: any, time: String, note: String) {
    const session = await auth();
    const simpleOrder : any = new Object()
    order.forEach((items: any) => {
        simpleOrder[items["nama"]] = items["jumlah"]
    });
    const today = new Date()
    const tanggal = today.getDate() + "/" + (today.getMonth() + 1) + " " + today.getFullYear() + ", Jam " + today.getHours() + ":" + today.getMinutes()
    const completeOrder = {
        namaPemesan: session?.user?.nama,
        usernamePemesan: session?.user?.username,
        lokasiPemesan: session?.user?.lokasi,
        waktuPemesanan: "Tanggal " + tanggal,
        pesanan: simpleOrder,
        waktuDiantar: time,
        catatan: note,
        status: "Belum Selesai",
    }

    const req = await fetch(`${process.env.SERVER_URL}/orderbaru`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            completeOrder
        })
    })
}