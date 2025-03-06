"use client";

import React, { createContext, useState } from "react";
import { any } from "zod";

export type orderStructure = {
    order: any,
    time: String,
    note: String,
    addToOrder: (item: any) => void,
    removeFromOrder: (item: any) => void,
    resetOrder: () => void,
    updateTime: (time: string) => void,
    updateNote: (note: string) => void,
    updateToken: (token:string) => void,
}

const initialState : orderStructure = {
    order: any,
    time: new String,
    note: new String,
    addToOrder: () => {},
    removeFromOrder: () => {},
    resetOrder: () => {},
    updateTime: () => {},
    updateNote: () => {},
    updateToken: () => {},
}

export const OrderContext = createContext(initialState)

export default function OrderProvider({ children }: { children: React.ReactNode}) {
    const [order, setOrder] = useState<any>([])
    const [time, setTime] = useState("Sekarang")
    const [note, setNote] = useState("Tidak ada")
    const [token, setToken] = useState("")
    
    function addToOrder(items : any) {
        const orderExists = order.find((item: { nama: any; }) => items.nama === item.nama)

        if (orderExists) {
            order.forEach((item: { nama: any; }) => {
                if (item.nama === orderExists.nama) {
                    orderExists.jumlah++
                }
            })
        } else {
            order.push({...items, jumlah: 1})
        }
    }

    function removeFromOrder(items : any) {
        const orderExists = order.find((item: { nama: any; }) => items.nama === item.nama)

        if (orderExists) {
            order.forEach((item: { nama: any; }) => {
                if (item.nama === orderExists.nama && orderExists.jumlah > 1) {
                    orderExists.jumlah--
                } else if (item.nama === orderExists.nama) {
                    order.splice(order.findIndex((item: { nama: any; }) => orderExists.nama === item.nama), 1)
                }
            })
        }
    }

    function resetOrder() {
        setOrder([])
        setTime("Sekarang")
        setNote("Tidak ada")
    }

    function updateTime(waktu : string) {
        setTime(waktu)
    }

    function updateNote(catatan : string) {
        setNote(catatan)
    }

    function updateToken(token : string) {
        setToken(token)
    }

    return (
        <OrderContext.Provider value={{
            order, time, note, addToOrder, removeFromOrder, resetOrder, updateTime, updateNote, updateToken
        }}>
            {children}
        </OrderContext.Provider>
    )
}