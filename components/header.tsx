"use client";

import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hideLinks = ["/price"].includes(pathname);

  return (
    <header
      className={`w-full h-20 md:h-30 bg-white flex justify-between items-center px-4 md:px-0 relative
        ${pathname !== "/" ? "border-b border-blue-500" : "border-0"}
        `}
    >
      <Image
        src={"/images/logo.png"}
        width={100}
        height={80}
        alt="Logo"
        className="w-20 h-auto md:w-25"
      />

      {/* Navegação para desktop */}
      {!hideLinks && (
        <nav className="hidden md:flex w-5xs px-10 h-full items-center">
          <ul className="w-full flex gap-x-10 text-blue-900 items-center">
            <li className="cursor-pointer hover:underline">Sobre o StockHub</li>
            <li className="cursor-pointer bg-blue-900 text-white py-2 px-5 rounded-xl hover:bg-blue-950 duration-500 ease-in-out">
              Testar produto
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => router.push("/price")}
            >
              Preços
            </li>
            <li className="cursor-pointer hover:underline">Entrar</li>
          </ul>
        </nav>
      )}

      {/* Botão hamburger para mobile/tablet */}
      <button
        type="button"
        className="md:hidden text-blue-900 text-3xl cursor-pointer p-2"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* Menu mobile/tablet */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-blue-100 z-50">
          <ul className="flex flex-col text-blue-900 py-4 px-6 gap-y-4">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre o StockHub
            </li>
            <li
              className="cursor-pointer bg-blue-900 text-white py-2 px-5 rounded-xl hover:bg-blue-950 duration-500 ease-in-out w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Testar produto
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nós
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
