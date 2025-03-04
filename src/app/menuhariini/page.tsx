import { Card, CardContent } from "@mui/material"

export default async function MenuHariIni() {
    const menuHariIni = await fetch(`${process.env.SERVER_URL}/menuhariini`).then((res) => res.json())
    const nodeMenuHariIni : JSX.Element[] = []

    menuHariIni.current.menu.forEach((menu: any) => {
        nodeMenuHariIni.push(
            <li key={menu}>{menu}</li>
        )
    })
    return (
        <main>
            <p className="text-center">Menu Hari Ini ({menuHariIni.current.tanggal}): </p>
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