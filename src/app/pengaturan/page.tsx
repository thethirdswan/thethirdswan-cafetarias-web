import Image from "next/image";
import { SignOut } from "../ui/signout";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@mui/material";

export default async function Pengaturan() {
    const session = await auth();
    if (!session) return redirect("/masuk");
    return (
        <div className="text-center">
            <Image
            height={100}
            width={100}
            src="/images/logoSMK2.png"
            alt="Logo SMK Negeri 2 Tabanan" 
            className="mx-auto"/>
            <h2 className="text-lg">Unit Produksi SMK Negeri 2 Tabanan</h2>
            <p>Versi 0.1.0 Web</p>
            <p>Masuk sebagai: {session.user?.nama}</p>
            <p>Lokasi: {session.user?.lokasi}</p>
            <Link href="/ubahlokasi"><Button variant="contained">Ubah Lokasi</Button></Link>
            <SignOut/>
        </div>
    )
}