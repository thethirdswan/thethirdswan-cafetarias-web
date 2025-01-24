import { SessionProvider } from "next-auth/react";
import UbahLokasiPrimer from "../ui/ubahlokasiprimer";
import { auth } from "../../../auth";

export default async function UbahLokasi() {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <UbahLokasiPrimer/>
        </SessionProvider>
    )
}