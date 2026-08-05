import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-100 bg-white w-full flex justify-between text-blue-900">
        <div className="w-2/3 h-full flex justify-center flex-col p-10 gap-y-2.5">
          <h1 className="font-bold text-4xl">
            Seu estoque, sem planilha, sem adivinhação.
          </h1>
          <h2 className="text-blue-500 text-2xl font-bold w-3/4">
            Cadastre produtos, organize por categoria e acompanhe quantidades em
            tempo real, sem depender de planilha.
          </h2>
        </div>
        <div className="w-1/3 h-full flex items-center">
          <Image
            width={300}
            height={300}
            src={"/images/stockHubExemplo.png"}
            alt="Exemplo de página"
          />
        </div>
      </div>
      <div className="h-100 bg-blue-400 w-full flex justify-between text-white items-center box-border pr-40">
        <div className="w-2/3 h-full flex justify-center flex-col p-10 gap-y-2.5">
          <p className="text-xl font-bold">Sem cartão de crédito!</p>
          <p className="text-xl font-bold">Pronto em menos de 2 minutos</p>
          <p className="text-xl font-bold">Cancele quanto quiser</p>
          <h2 className="text-2xl font-bold w-3/4 text-blue-900 mt-5">Crie sua conta grátis</h2>
          <button className="cursor-pointer bg-blue-900 text-white py-2 px-5 rounded-xl hover:bg-blue-950 duration-500 ease-in-out w-45">
            Testar produto
          </button>
        </div>
        <Image
          width={200}
          height={200}
          src={"/images/logo_branca.png"}
          alt="Exemplo de página"
          className="w-70 h-65 opacity-50"
        />
      </div>
      <div className="h-180 bg-white w-full flex justify-between text-blue-900 "></div>
      <div className="h-150 bg-blue-400 w-full flex justify-between text-white"></div>
    </main>
  );
}
