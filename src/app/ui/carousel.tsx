"use client"

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Item } from '../lib/types';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import CarouselImage from './carouselImage';

export default function MenuCarousel() {
    const [makanan, setMakanan] = useState<Item[]>([]);
    const [minuman, setMinuman] = useState<Item[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/makanan`)
            .then((res) => res.json())
            .then((data) => setMakanan(data));
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/minuman`)
            .then((res) => res.json())
            .then((data) => setMinuman(data));
    }, [])

    let makananlist : JSX.Element[] = [];
    makanan.forEach(async (item: Item) => {
        makananlist.push(
            <SwiperSlide key={item.nama}>
                <CarouselImage type="makanan" item={item.nama.toLowerCase().replace(/\s+/g, "")} />
                    <div className='w-full absolute bottom-8'>
                        <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                            <p>{item.nama}</p>
                            <p>Rp {item.harga}</p>
                        </div>
                    </div>
            </SwiperSlide>
        )
    })
    let minumanlist : JSX.Element[] = [];
    minuman.forEach(async (item: Item) => {
        minumanlist.push(
            <SwiperSlide key={item.nama}>
                <CarouselImage type="minuman" item={item.nama.toLowerCase().replace(/\s+/g, "")} />
                    <div className='w-full absolute bottom-8'>
                        <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                            <p>{item.nama}</p>
                            <p>Rp {item.harga}</p>
                        </div>
                    </div>
            </SwiperSlide>
        )
    })
    return (
        <div className="lg:grid grid-cols-2 gap-4 mx-4 text-white">
            <div>
                <p className="mb-4">MAKANAN</p>
                <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                >
                    {makananlist}
                </Swiper>
            </div>
            <div>
                <p className="mb-4">MINUMAN</p>
                <Swiper 
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                >
                    {minumanlist}
                </Swiper>
            </div>
        </div>
    )
}