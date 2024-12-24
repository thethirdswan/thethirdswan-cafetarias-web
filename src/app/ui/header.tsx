"use client";
import { Button } from "@mui/material";
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
                <div className="lg:hidden my-auto ml-28">
                    <button onClick={toggleDrawer(true)} className="md:hidden"><Menu color="inherit"/> </button>
                </div>
            </div>
            <div className="hidden lg:flex flex-row ml-auto">
                <Link href="/masuk" className="my-auto m-2"><Button color="inherit">Masuk</Button></Link>
                <Link href="/daftar" className="my-auto m-2"><Button color="inherit">Daftar</Button></Link>
            </div>
        </header>
    )
}