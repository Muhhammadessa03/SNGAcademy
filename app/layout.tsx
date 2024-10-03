import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Conponents/Nav";
import Footer from "./Conponents/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Shaheed Nasrullah Gadani Acadmy",
  description:"Shaheed Nasrullah Gadani Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
