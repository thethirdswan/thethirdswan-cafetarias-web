import { Button } from "@mui/material";
import Link from "next/link";
import { auth } from "../auth";
import DesktopDrawer from "./drawers/desktopdrawer";

export default async function DesktopHeader() {
    const session = await auth();
    if (session) {
        return (
            <DesktopDrawer/>
        )
    } else {
        return (
            <div className="hidden md:flex flex-row ml-auto">
                <Link href="/masuk" className="my-auto m-2"><Button color="inherit">Masuk</Button></Link>
                <Link href="/daftar" className="my-auto m-2"><Button color="inherit">Daftar</Button></Link>
            </div>
        )
    }
}