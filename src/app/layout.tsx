import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duta Cafetaria",
  description: "Website resmi Unit Produksi SMK Negeri 2 Tabanan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
