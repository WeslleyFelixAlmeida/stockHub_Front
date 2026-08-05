import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header";
import { Inter } from "next/font/google";
import Footer from "../../components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stock Hub",
  description: "Gerenciamento de estoque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
