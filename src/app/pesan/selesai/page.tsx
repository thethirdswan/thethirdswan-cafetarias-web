"use client"

import { Card, CardContent } from "@mui/material";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function Selesai() {
    const searchParams = useSearchParams();
    const payload = searchParams.get('payload');
    if (payload === null) {
        redirect("/");
    }

    let [seconds, setSeconds] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds--)
            if (seconds < 0) {
                redirect("/");
            }
        }, 1000)

        return () => clearInterval(interval);
    })
    return (
        <main>
            <Card className="md:mx-[24.707vw] mx-2 text-center">
                <CardContent>
                    <p>Pembayaran berhasil!</p>
                    <p>Pesanan anda akan segera disiapkan, dan anda akan diarahkan ke menu utama dalam {seconds} detik.</p>
                </CardContent>
            </Card>
        </main>
    )
}

export default function OrderSelesai() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Selesai />
        </Suspense>
    )
}