import { Button } from "@mui/material";
import MenuCarousel from "./ui/carousel";
import Link from "next/link";

export default function Home() {

  return (
      <main className="text-center">
      <p className="mb-4">
        Selamat datang di website resmi 
        <br/> 
        Unit Produksi SMK Negeri 2 Tabanan,
      </p>
      <p className="mb-4">
        Dimana makanan, minuman, dan peralatan sekolah dijual oleh siswa, untuk siswa! Kami juga menyediakan jasa print dokumen.
      </p>
      <p>
        Berikut adalah menu tetap di Duta Cafetaria;
      </p>
      <MenuCarousel />
      <div>
        <p className="mb-4">Ingin</p>
        <p className="mb-4">Cek menu hari ini, atau <Link href="/pesan"><Button variant="contained">Memesan</Button></Link>?</p>
        <p className="mb-4">Kami buka dari jam 7:30 sampai 15:00, Senin - Jumat.</p>
      </div>
      </main>
  );
}
