import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "./(components)/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-16 flex min-h-screen">
        <Sidebar />
        <div className="w-full p-4 overflow-auto">{children}</div>
      </div>
    </>
  );
}
