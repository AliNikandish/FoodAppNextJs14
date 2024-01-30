import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "فود-سایت سفارش غذا",
  description: "بهترین سایت برای خرید",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-VazirMedium">
        <CartContextProvider>
        <Navbar />
        {children}
        <Footer/>
        </CartContextProvider>
      </body>
    </html>
  );
}
