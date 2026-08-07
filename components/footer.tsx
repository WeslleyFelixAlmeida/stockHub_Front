"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const hideFooter = ["/login", "/register"].includes(pathname);
  const hideLinks = ["/price"].includes(pathname);

  return (
    <footer
      className={`w-full  bg-white justify-between items-center text-blue-500 flex-col text-base md:text-lg py-6 md:py-0
        ${!hideLinks ? "min-h-40" : "min-h-10"}
        ${!hideFooter ? "flex" : "hidden"}
        `}
    >
      {!hideLinks && (
        <ul className="columns-2 w-full my-auto px-6 md:pl-90 md:px-0 box-border font-medium space-y-2.5">
          <li>Sobre nós</li>
          <li>Política de privacidade</li>
          <li>Contatos</li>
          <li>Dúvidas frequentes</li>
        </ul>
      )}
      <p className="flex items-center justify-center font-bold border-t border-blue-500 w-full py-2.5 mt-4 md:mt-0">
        &copy;StockHub
      </p>
    </footer>
  );
};
export default Footer;
