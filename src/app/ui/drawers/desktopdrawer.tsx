"use client";

import { Menu } from "@mui/icons-material";
import { Button, Divider, Drawer } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function DesktopDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    return (
        <div>
            <div className="hidden md:block my-auto ml-auto">
                <button onClick={toggleDrawer(true)} className="hidden md:block absolute right-6 top-10"><Menu color="inherit"/> </button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="w-[25vw]">
                    <h2 className="text-lg m-2">Menu</h2>
                    <Divider />
                    <div className="p-2 flex flex-col text-center" onClick={toggleDrawer(false)}>
                        <Link href="/pengaturan" className="m-2"><Button color="primary" variant="contained">Pengaturan</Button></Link>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}