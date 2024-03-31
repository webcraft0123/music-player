import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "h-screen ")}>
        <Navbar />
        <section className="grid grid-flow-col grid-cols-[auto,_1fr] h-full ">
          <Menu />
          <main className="bg-white h-full w-full py-10 px-2 overflow-y-auto">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
