import { Card, CardContent } from "@mui/material"

export default async function MenuHariIni() {
    const menuHariIni = await fetch(`${process.env.SERVER_URL}/menuhariini`).then((res) => res.json())
    const nodeMenuHariIni : JSX.Element[] = []

    menuHariIni.menu.forEach((menu: String) => {
        nodeMenuHariIni.push(
            <li>{menu}</li>
        )
    })
    return (
        <main>
            <p className="text-center">Menu Hari Ini ({menuHariIni.tanggal}): </p>
            <Card className="md:mx-[24.707vw] mx-2">
                <CardContent>
                    <ul>
                        {nodeMenuHariIni}
                    </ul>
                </CardContent>
            </Card>
        </main>
    )
}