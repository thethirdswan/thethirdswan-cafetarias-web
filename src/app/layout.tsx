import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
