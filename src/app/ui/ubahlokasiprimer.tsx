"use client"
import { Card, CardContent, Button } from "@mui/material"
import { useSession } from "next-auth/react"
import { useState } from "react"
import ubahlokasi from "../lib/ubahlokasi"
import { toast } from "sonner"

export default function UbahLokasiPrimer() {
    const { data: session, update } = useSession()
    const [lokasiBaru, setLokasi] = useState(session!.user!.lokasi)
    return (
            <Card className="mx-2 md:mx-[24.707vw]">
                <CardContent>
                    <p>Ubah Lokasi</p>
                    <form method="POST" action={ubahlokasi} className="my-2">
                        <input type="text" name="lokasi" className="border" placeholder="Lokasi Baru" required defaultValue={session!.user!.lokasi} onChange={(e) => {setLokasi(e.target.value);}}></input>
                        <Button variant="contained" color="error" onClick={() => {update({ user: {
                            _id: session?.user?._id,
                            nama: session?.user?.nama,
                            lokasi: lokasiBaru,
                            username: session?.user?.username,
                            password: session?.user?.password,
                            admin: session?.user?.admin,
                        } });
                        toast("Mengubah lokasi...");}} className="mx-2"><input type="submit" value="Ubah"/></Button>
                    </form>
                </CardContent>
            </Card>
    )
}