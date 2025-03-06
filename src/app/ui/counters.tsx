"use client";

import { useState, useContext } from "react";
import { OrderContext } from "../lib/context";

export default function Counters(item : any) {
    const { addToOrder, removeFromOrder } = useContext(OrderContext)
    const [counter, setCounter] = useState(0)
    const [minCounter, setMinCounter] = useState(true)
    const [maxCounter, setMaxCounter] = useState(false)
    if (item.item.stok == 0) {
        return (
            <div className="flex flex-row">
                <button className="p-2 bg-cyan-300" disabled={true} onClick={() => mincounter(item.item)}>-</button>
                    <p className="p-2">{counter}</p>
                <button className="p-2 bg-cyan-300" disabled={true} onClick={() => maxcounter(item.item)}>+</button>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row">
                <button className="p-2 bg-cyan-300" disabled={minCounter} onClick={() => mincounter(item.item)}>-</button>
                    <p className="p-2">{counter}</p>
                <button className="p-2 bg-cyan-300" disabled={maxCounter} onClick={() => maxcounter(item.item)}>+</button>
            </div>
        )
    }

    function mincounter(item : any) {
        setCounter(counter - 1); 
        removeFromOrder(item)
        setMaxCounter(false);
        if (counter == 1) {
            setMinCounter(true);
        }
    }
    
    function maxcounter(item : any) {
        setCounter(counter + 1); 
        addToOrder(item)
        setMinCounter(false);
        if (counter == item.stok - 1) {
            setMaxCounter(true)
        } 
    }
}