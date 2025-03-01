"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import deleteOrder from "../lib/deleteorder";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton(orderId: any) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="error" onClick={handleClickOpen}>Hapus Pesanan</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Hapus Pesanan"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-text">
                        Apakah anda yakin untuk menghapus pesanan ini?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Tidak</Button>
                    <Button onClick={async () => {handleClose(); await deleteOrder(orderId); toast("Pesanan dihapus."); redirect("/riwayatpesanan");}}>Ya</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}