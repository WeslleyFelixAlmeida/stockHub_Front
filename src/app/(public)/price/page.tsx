import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

const Price = () => {
  return (
    <div className="h-auto w-full bg-white">
      <Header />
      <div className="h-auto md:h-180 bg-white w-full flex text-blue-900 flex-col p-5 md:p-10 gap-y-8">
        <Link
          href={"/"}
          className="underline w-fit"
        >
          Voltar
        </Link>
        <h2 className="text-xl md:text-2xl font-bold w-full md:w-3/4 text-blue-900 text-center md:text-left">
          Veja nossos planos:
        </h2>
        <div className="h-fit w-full flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-y-0 md:gap-x-15">
          {/* Free */}
          <div className="border border-blue-400 w-full max-w-80 h-auto md:h-135 rounded-xl overflow-hidden p-5 relative">
            <div className="h-15 flex items-center justify-center border-b-2 border-blue-900">
              <p className="font-bold text-2xl">Free</p>
            </div>
            <div className="h-auto md:h-75 pt-2">
              <ul className="list-disc list-inside text-base md:text-lg font-semibold space-y-2 md:overflow-hidden md:h-70">
                <li>Ideal para testes</li>
                <li>50 MB de armazenamento para produtos</li>
                <li>Acesso a API externa</li>
                <li>Limite de 1 conexão da API externa</li>
                <li>Acesso a funcionalidade de relatório mensal</li>
                <li>Acesso a funcionalidade de gráficos</li>
              </ul>
            </div>
            <div className="w-full flex flex-col items-center mt-4 md:mt-0">
              <div className="h-13 flex items-center justify-center border-b-2 border-blue-900 w-full">
                <div className="hidden md:block bg-white/50 absolute w-full top-85 h-10"></div>
                <button className="underline text-xl cursor-pointer">
                  Ver mais
                </button>
              </div>
              <div className="h-10 flex items-center justify-center text-xl font-bold w-full mt-1">
                <p>R$ 0,00</p>
              </div>
              <button className="mt-1 border rounded-xl w-fit py-1 px-10 cursor-pointer hover:bg-blue-100 duration-500 ease-in-out">
                Escolher plano
              </button>
            </div>
          </div>

          {/* Professional */}
          <div className="relative w-full max-w-80 h-auto md:h-135 text-yellow-500 mt-8 md:mt-0">
            <IoStarSharp className="hidden md:block absolute text-5xl top-5 -left-8" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-20 -left-7" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-35 -left-9" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-50 -left-10" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-65 -left-9" />

            <IoStarSharp className="hidden md:block absolute text-5xl top-5 -right-8" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-20 -right-7" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-35 -right-9" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-50 -right-10" />
            <IoStarSharp className="hidden md:block absolute text-5xl top-65 -right-9" />

            <div className="relative z-10 border-2 border-yellow-600 w-full h-full rounded-xl p-5 bg-zinc-900 text-yellow-600">
              <div className="h-15 flex items-center justify-center border-b-2 border-yellow-600 relative">
                <div className="absolute -top-10 h-10 w-50 bg-zinc-900 flex items-center justify-center font-bold text-xl rounded-xl text-yellow-600 border-2 border-yellow-600">
                  <p>Mais escolhido</p>
                </div>
                <p className="font-bold text-2xl">Professional</p>
              </div>
              <div className="h-auto md:h-75 pt-2">
                <ul className="list-disc list-inside text-base md:text-lg font-semibold space-y-2 md:overflow-hidden md:h-70">
                  <li>Ideal para maioria dos negócios</li>
                  <li>700 MB de armazenamento para produtos</li>
                  <li>Acesso a API externa</li>
                  <li>Limite até 3 conexões da API externa</li>
                  <li>
                    Acesso a funcionalidade de relatório mensal, semanal e
                    diário
                  </li>
                  <li>Acesso a funcionalidade de gráficos</li>
                </ul>
              </div>

              <div className="w-full flex flex-col items-center mt-4 md:mt-0">
                <div className="hidden md:block bg-zinc-900/50 absolute lg:w-full top-85 h-10 w-full"></div>
                <div className="h-13 flex items-center justify-center border-b-2 border-yellow-600 w-full">
                  <button className="underline text-xl cursor-pointer">
                    Ver mais
                  </button>
                </div>
                <div className="h-10 flex items-center justify-center text-xl font-bold w-full mt-1">
                  <p>R$ 39,90</p>
                </div>
                <button className="mt-1 border rounded-xl w-fit py-1 px-10 cursor-pointer bg-yellow-600 text-zinc-900 font-bold hover:bg-yellow-500 duration-500 ease-in-out">
                  Escolher plano
                </button>
              </div>
            </div>
          </div>

          {/* MarketLeader */}
          <div className="border border-blue-400 w-full max-w-80 h-auto md:h-135 rounded-xl overflow-hidden p-5 relative mt-8 md:mt-0">
            <div className="h-15 flex items-center justify-center border-b-2 border-blue-900">
              <p className="font-bold text-2xl">MarketLeader</p>
            </div>
            <div className="h-auto md:h-75 pt-2">
              <ul className="list-disc list-inside text-base md:text-lg font-semibold space-y-2 md:overflow-hidden md:h-70">
                <li>Ideal para grandes empresas</li>
                <li>1 GB de armazenamento para produtos</li>
                <li>Acesso a API externa</li>
                <li>Limite de até 5 conexões da API externa</li>
                <li>
                  Acesso a funcionalidade de relatório mensal, semanal e diário
                </li>
                <li>Acesso a funcionalidade de gráficos</li>
              </ul>
            </div>
            <div className="w-full flex flex-col items-center mt-4 md:mt-0">
              <div className="hidden md:block bg-white/50 absolute w-full top-85 h-10"></div>
              <div className="h-13 flex items-center justify-center border-b-2 border-blue-900 w-full">
                <button className="underline text-xl cursor-pointer">
                  Ver mais
                </button>
              </div>
              <div className="h-10 flex items-center justify-center text-xl font-bold w-full mt-1">
                <p>R$ 0,00</p>
              </div>
              <button className="mt-1 border rounded-xl w-fit py-1 px-10 cursor-pointer hover:bg-blue-100 duration-500 ease-in-out">
                Escolher plano
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Price;
