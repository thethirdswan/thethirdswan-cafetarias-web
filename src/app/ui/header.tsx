import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white bg-blue-700 text-center py-[10px] mb-[10px] lg:flex flex-row">
            <div className="lg:flex flex-row">
                <Image
                    src="/images/logoSMK2.png"
                    width={75}
                    height={75}
                    alt="Logo SMK Negeri 2 Tabanan"
                    className="mx-auto lg:m-2"
                />
                <Link href="/" className="text-xl lg:my-auto m-2">
                    <h1>Duta Cafetaria</h1>
                </Link>
            </div>
            <div className="hidden lg:flex flex-row ml-auto">
                <Link href="/masuk" className="my-auto m-2">Masuk</Link>
                <Link href="/daftar" className="my-auto m-2">Daftar</Link>
            </div>
        </header>
    )
}