"use client";

import { useState } from "react";

export default function Counters(item : any) {
    const [counter, setCounter] = useState(0)
    const [minCounter, setMinCounter] = useState(true)
    const [maxCounter, setMaxCounter] = useState(false)
    return (
        <div className="flex flex-row">
            <button className="p-2 bg-cyan-300" disabled={minCounter} onClick={() => mincounter(item.item)}>-</button>
                <p className="p-2">{counter}</p>
            <button className="p-2 bg-cyan-300" disabled={maxCounter} onClick={() => maxcounter(item.item)}>+</button>
        </div>
    )

    function mincounter(item : any) {
        setCounter(counter - 1); 
        global.orderlist[item.nama] = counter
        setMaxCounter(false);
        console.log(counter); 
        console.log(global.orderlist); 
        if (counter == 1) {
            setMinCounter(true);
            delete global.orderlist[item.nama]
        }
    }
    
    function maxcounter(item : any) {
        setCounter(counter + 1); 
        global.orderlist[item.nama] = counter
        setMinCounter(false);
        console.log(counter); 
        console.log(global.orderlist); 
        if (counter == item.stok - 1) setMaxCounter(true); 
    }
}