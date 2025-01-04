import { Button, Card, CardContent, Divider } from "@mui/material";
import ubahlokasi from "../lib/ubahlokasi";

export default function UbahLokasi() {
    return (
        <Card className="mx-2 md:mx-[24.707vw]">
            <CardContent>
                <p>Ubah Lokasi</p>
                <Divider/>
                <div className="bg-red-400 text-red-900">
                    <p>Mengubah lokasi akan mengeluarkan anda dari sesi kali ini demi ketepatan data. Mohon masuk ulang setelah ubah lokasi!</p>
                </div>
                <Divider/>
                <p></p>
                <form method="POST" action={ubahlokasi} className="my-2">
                    <input type="text" name="lokasi" className="border" placeholder="Lokasi Baru" required></input>
                    <Button variant="contained" color="error" className="mx-2"><input type="submit" value="Ubah"/></Button>
                </form>
            </CardContent>
        </Card>
    )
}