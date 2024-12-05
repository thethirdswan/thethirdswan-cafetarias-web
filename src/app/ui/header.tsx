import Image from "next/image";

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
                <h1 className="text-xl lg:my-auto m-2">Duta Cafetaria</h1>
            </div>
            <div className="hidden lg:flex flex-row ml-auto">
                <p className="my-auto m-2">Login</p>
                <p className="my-auto m-2">Daftar</p>
            </div>
        </header>
    )
}