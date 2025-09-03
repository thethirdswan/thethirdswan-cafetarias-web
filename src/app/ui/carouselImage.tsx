"use client";

import { useEffect, useState } from "react";
import imageFetch from "../lib/imagefetch";
import Image from 'next/image';

export default function CarouselImage({type, item}: {type: string, item: string}) {
    const [image, setImage] = useState<string>("");
    useEffect(() => {
        imageFetch(item, type).then((url) => setImage(url));
    }, [item, type])

    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <Image
            src={image}
            width={659}
            height={300}
            alt={item}
            className='w-[100%]'
        />
    )
}