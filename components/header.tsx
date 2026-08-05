import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-30 bg-white flex justify-between items-center">
      <Image
        src={"/images/logo.png"}
        width={100}
        height={80}
        alt="Logo"
      />
      <nav className="w-5xs px-10 h-full flex items-center">
        <ul className="w-full flex gap-x-10 text-blue-900 items-center">
          <li className="cursor-pointer hover:underline">Sobre o StockHub</li>
          <li className="cursor-pointer bg-blue-900 text-white py-2 px-5 rounded-xl hover:bg-blue-950 duration-500 ease-in-out">Testar produto</li>
          <li className="cursor-pointer hover:underline">Sobre nós</li>
          <li className="cursor-pointer hover:underline">Entrar</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
