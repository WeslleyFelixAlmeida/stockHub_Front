import type { Metadata } from "next";
import "./globals.css";
// import Header from "../../components/header";
import { Inter } from "next/font/google";
// import Footer from "../../components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stock Hub",
  description: "Gerenciamento de estoque",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${inter.variable} h-full antialiased`}>{children}</main>
  );
}
