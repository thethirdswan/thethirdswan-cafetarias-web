"use client";

import { Menu } from "@mui/icons-material";
import { Button, Divider, Drawer } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function MobileDrawer({session} : {session: boolean}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    if (session) {
        return (
        <div>
            <div className="md:hidden my-auto ml-auto">
                <button onClick={toggleDrawer(true)} className="absolute right-6 top-10"><Menu color="inherit"/> </button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[50vw]">
                    <h2 className="text-lg m-2">Menu</h2>
                    <Divider />
                    <div className="p-2 flex flex-col text-center" onClick={toggleDrawer(false)}>
                        <Link href="/pengaturan" className="m-2"><Button color="primary" variant="contained">Pengaturan</Button></Link>
                        <Link href="/riwayatpesanan" className="m-2"><Button color="primary" variant="contained">Riwayat Pesanan</Button></Link>
                    </div>
                </div>
            </Drawer>
        </div>
        )
    } else {
        return (
            <div>
            <div className="md:hidden my-auto ml-auto">
                <button onClick={toggleDrawer(true)} className="absolute right-6 top-10"><Menu color="inherit"/> </button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[50vw]">
                    <h2 className="text-lg m-2">Menu</h2>
                    <Divider />
                    <div className="p-2 flex flex-col text-center" onClick={toggleDrawer(false)}>
                        <Link href="/masuk" className="m-2"><Button color="primary" variant="contained">Masuk</Button></Link>
                        <Link href="/daftar" className="m-2"><Button color="primary" variant="contained">Daftar</Button></Link>
                    </div>
                </div>
            </Drawer>
        </div>
        )
    }
}