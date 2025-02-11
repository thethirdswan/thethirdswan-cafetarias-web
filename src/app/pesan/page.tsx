import { Card, CardContent } from "@mui/material";
import { Suspense } from "react";
import Loading from "../ui/loadingSkeletons/loading";
import FoodSlot from "../ui/pages/foodslot";
import DrinkSlot from "../ui/pages/drinkslot";

export default function Pesan() {
    const order = {}
    return (
        <main>
            <h3 className="text-center text-xl">Daftar Menu</h3>
            <div className="md:grid grid-cols-2 mb-10">
                <div>
                    <p className="text-center ml-[24.707vw]">Makanan</p>
                    <Card className="ml-[24.707vw] mr-2 h-[75vh] !overflow-scroll">
                        <CardContent>
                            <Suspense fallback={<Loading/>}>
                                <FoodSlot/>
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <p className="text-center mr-[24.707vw]">Minuman</p>
                    <Card className="mr-[24.707vw] ml-2 h-[75vh] !overflow-scroll">
                        <CardContent>
                            <Suspense fallback={<Loading/>}>
                                <DrinkSlot/>
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Card className="mx-[24.707vw] mb-10">
                <CardContent>
                    <p>Diantar:</p>
                    <input className="mr-2" type="radio" name="waktu" value="Sekarang" id="sekarang" defaultChecked/>
                    <label htmlFor="sekarang" className="mr-6">Sekarang</label>
                    <input className="mr-2" type="radio" name="waktu" value="Pada waktu:" id="padawaktu"/>
                    <label htmlFor="padawaktu">Pada waktu:</label>
                </CardContent>
            </Card>
        </main>
    )
}