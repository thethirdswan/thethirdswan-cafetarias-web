"use client";

import { useState } from "react";

export default function Counters(item : any) {
    const [counter, setCounter] = useState(0)
    const [minCounter, setMinCounter] = useState(true)
    const [maxCounter, setMaxCounter] = useState(false)
    return (
        <div className="flex flex-row">
            <button className="p-2 bg-cyan-300" disabled={minCounter} onClick={() => { console.log(counter); if (counter == 1) setMinCounter(true); setCounter(counter - 1); setMaxCounter(false); }}>-</button>
                <p className="p-2">{counter}</p>
            <button className="p-2 bg-cyan-300" disabled={maxCounter} onClick={() => { console.log(counter); if (counter == item.item.stok - 1) setMaxCounter(true); setCounter(counter + 1); setMinCounter(false)}}>+</button>
        </div>
    )
}