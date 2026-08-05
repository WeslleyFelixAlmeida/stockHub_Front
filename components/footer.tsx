const Footer = () => {
  return (
    <footer className="w-full h-30 bg-white flex justify-between items-center text-blue-500 flex-col text-lg">
      <ul className="columns-2 w-full my-auto pl-90 box-border font-medium">
        <li>Sobre nós</li>
        <li>Política de privacidade</li>
        <li>Contatos</li>
        <li>Dúvidas frequentes</li>
      </ul>
      <p className="flex items-center justify-center font-bold border-t border-blue-500 w-full py-2.5">
        &copy;StockHub
      </p>
    </footer>
  );
};
export default Footer;
