"use client";
import { Button, Divider, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <header className="text-white bg-blue-700 text-center py-[10px] mb-[10px] lg:flex flex-row">
            <div className="flex flex-row">
                <Image
                    src="/images/logoSMK2.png"
                    width={75}
                    height={75}
                    alt="Logo SMK Negeri 2 Tabanan"
                    className="m-2"
                />
                <Link href="/" className="text-xl my-auto m-2">
                    <h1>Duta Cafetaria</h1>
                </Link>
                <div className="lg:hidden my-auto ml-auto">
                    <button onClick={toggleDrawer(true)} className="md:hidden absolute right-6 top-10"><Menu color="inherit"/> </button>
                </div>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[50vw]">
                    <h2 className="text-lg m-2">Pengaturan</h2>
                    <Divider />
                    <div className="p-2 flex flex-col text-center" onClick={toggleDrawer(false)}>
                        <Link href="/masuk" className="lg:my-auto m-2"><Button color="inherit" variant="contained">Masuk</Button></Link>
                        <Link href="/daftar" className="lg:my-auto m-2"><Button color="inherit" variant="contained">Daftar</Button></Link>
                    </div>
                </div>
            </Drawer>
            <div className="hidden lg:flex flex-row ml-auto">
                <Link href="/masuk" className="my-auto m-2"><Button color="inherit">Masuk</Button></Link>
                <Link href="/daftar" className="my-auto m-2"><Button color="inherit">Daftar</Button></Link>
            </div>
        </header>
    )
}