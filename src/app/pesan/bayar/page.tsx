"use client"

import { Card, CardContent } from '@mui/material'
import { redirect, useSearchParams } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react'
import { OrderContext } from '@/app/lib/context'
import orderAssemble from '@/app/lib/orderassemble'
import { Suspense, useContext } from 'react'

function QRIS() {
    const searchParams = useSearchParams();
    const payload = searchParams.get('payload');
    if (payload === null) {
        redirect("/");
    }

    const { order, time, note, resetOrder } = useContext(OrderContext)
    return (
        <Card className='md:mx-[24.707vw] mx-2 text-center'>
            <CardContent>
                <p>Silakan scan kode QRIS berikut untuk membayar:</p>
                <QRCodeSVG className="mx-auto" value="00020101021126610014COM.GO-JEK.WWW01189360091433526448690210G3526448690303UMI51440014ID.CO.QRIS.WWW0215ID10254211976960303UMI5204899953033605802ID5925Arya 'The Third Swan' Suw6007TABANAN61058211162070703A016304BEC2" />
                <p>NMID: ID1025421197696</p>
                <p>Setelah pembayaran selesai, anda akan diarahkan ke invoice pembayaran.</p>
                <button onClick={async () => {
                    await orderAssemble(order, time, note, "QRIS", true); 
                    resetOrder();
                    redirect(`/pesan/selesai?payload=${payload}`)
                    }}>pretend it's done</button>
            </CardContent>
        </Card>
    )
}

export default function BayarQRIS() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <QRIS />
        </Suspense>
    )
}