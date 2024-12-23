"use client";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css/bundle';

export default function MenuCarousel() {
    return (
        <div className="lg:grid grid-cols-2 gap-4 mx-4">
            <div>
                <p className="mb-4">MAKANAN</p>
                <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                >
                    <SwiperSlide>
                        <Image
                        src="/images/makanan/nasigoreng.jpg"
                        width={659}
                        height={300}
                        alt='Nasi Goreng'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Nasi Goreng</p>
                                <p>Rp 8.000 - 10.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/makanan/capcay.jpg"
                        width={659}
                        height={300}
                        alt='Capcay'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Capcay</p>
                                <p>Rp 10.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/makanan/miegoreng.jpg"
                        width={659}
                        height={300}
                        alt='Mie Goreng'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Mie Instan Goreng</p>
                                <p>Rp 8.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/makanan/miekuah.jpg"
                        width={659}
                        height={300}
                        alt='Mie Kuah'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Mie Instan Kuah</p>
                                <p>Rp 8.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
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
                    <SwiperSlide>
                        <Image
                        src="/images/minuman/esteh.jpg"
                        width={659}
                        height={300}
                        alt='Es Teh'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Es Teh</p>
                                <p>Rp 3.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/minuman/esjeruk.jpg"
                        width={659}
                        height={300}
                        alt='Es Jeruk'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Es Jeruk</p>
                                <p>Rp 3.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/minuman/kopi.jpg"
                        width={659}
                        height={300}
                        alt='Kopi'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Kopi</p>
                                <p>Rp 3.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/images/minuman/melonsquash.jpg"
                        width={659}
                        height={300}
                        alt='Melon Squash'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Melon Squash</p>
                                <p>Rp 6.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/minuman/fruitsquash.jpg"
                        width={659}
                        height={300}
                        alt='Fruit Squash'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Fruit Squash</p>
                                <p>Rp 6.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/minuman/orangesquash.jpg"
                        width={659}
                        height={300}
                        alt='Orange Squash'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Orange Squash</p>
                                <p>Rp 6.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/images/minuman/rainbow.jpg"
                        width={659}
                        height={300}
                        alt='Rainbow'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Rainbow</p>
                                <p>Rp 6.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image
                        src="/images/minuman/sunrise.jpg"
                        width={659}
                        height={300}
                        alt='Sunrise'
                        />
                        <div className='w-full absolute bottom-8'>
                            <div className='mx-auto w-fit p-2 bg-slate-700 bg-opacity-50'>
                                <p>Sunrise</p>
                                <p>Rp 6.000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}