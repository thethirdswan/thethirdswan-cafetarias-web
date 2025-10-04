import { Button } from "@mui/material";
import MenuCarousel from "./ui/carousel";
import Link from "next/link";
import ServiceWorker from "./lib/serviceWorker";

export default function Home() {
  return (
      <main className="text-center">
        <ServiceWorker />
      <p className="mb-4">
        Selamat datang di website resmi 
        <br/> 
        The Third Swan Cafetarias,
      </p>
      <p className="mb-4">
        Dimana makanan, minuman, dan peralatan sekolah dijual oleh siswa, untuk siswa!
      </p>
      <p>
        Berikut adalah menu sekilas di The Third Swan Cafetarias;
      </p>
      <MenuCarousel />
      <Link href="/menu"><Button variant="contained" className="mt-2">Lihat Menu Lengkap</Button></Link>
      <div>
        <p className="mb-4">Ingin</p>
        <p className="mb-4">Cek <Link href="/menuhariini"><Button variant="contained">menu hari ini</Button></Link>, atau <Link href="/pesan"><Button variant="contained">Memesan</Button></Link>?</p>
        <p className="mb-4">Kami buka dari jam 7:30 sampai 15:00, Senin - Jumat.</p>
      </div>
      </main>
  );
}
