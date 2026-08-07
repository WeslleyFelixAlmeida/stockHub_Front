"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <div className="h-auto md:h-100 bg-white w-full flex flex-col-reverse md:flex-row justify-between text-blue-900 px-5 py-8 md:p-0">
          <div className="w-full md:w-2/3 h-full flex justify-center flex-col md:p-10 gap-y-2.5 text-center md:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Seu estoque, sem planilha, sem adivinhação.
            </h1>
            <h2 className="text-blue-500 text-base sm:text-lg md:text-2xl font-bold w-full md:w-3/4 mx-auto md:mx-0">
              Cadastre produtos, organize por categoria e acompanhe quantidades
              em tempo real, sem depender de planilha.
            </h2>
          </div>
          <div className="w-full md:w-1/3 h-full flex items-center justify-center mb-6 md:mb-0">
            <Image
              width={300}
              height={300}
              src={"/images/stockHubExemplo.png"}
              alt="Exemplo de página"
              className="w-40 h-auto sm:w-56 md:w-auto"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="h-auto md:h-100 bg-blue-400 w-full flex flex-col md:flex-row justify-between text-white items-center box-border px-5 py-10 md:p-0 md:pr-40 text-center md:text-left">
          <div className="w-full md:w-2/3 h-full flex justify-center flex-col md:p-10 gap-y-2.5 items-center md:items-start">
            <p className="text-lg md:text-xl font-bold">
              Sem cartão de crédito!
            </p>
            <p className="text-lg md:text-xl font-bold">
              Pronto em menos de 2 minutos
            </p>
            <p className="text-lg md:text-xl font-bold">
              Cancele quanto quiser
            </p>
            <h2 className="text-xl md:text-2xl font-bold w-full md:w-3/4 text-blue-900 mt-5">
              Crie sua conta grátis
            </h2>
            <button className="cursor-pointer bg-blue-900 text-white py-2 px-5 rounded-xl hover:bg-blue-950 duration-500 ease-in-out w-45">
              Testar produto
            </button>
          </div>
          <Image
            width={200}
            height={200}
            src={"/images/logo_branca.png"}
            alt="Exemplo de página"
            className="w-40 h-36 md:w-70 md:h-65 opacity-50 mt-8 md:mt-0"
          />
        </div>

        {/* PLANOS */}
        <div className="h-auto md:h-180 bg-white w-full flex text-blue-900 flex-col p-5 md:p-10 gap-y-8">
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
                <div className="hidden md:block bg-white/50 absolute w-full top-85 h-10"></div>
                <div className="h-13 flex items-center justify-center border-b-2 border-blue-900 w-full">
                  <button
                    className="underline text-xl cursor-pointer"
                    onClick={() => router.push("/price")}
                  >
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
                  <div className="h-13 flex items-center justify-center border-b-2 border-yellow-600 w-full">
                    <div className="hidden md:block bg-zinc-900/50 absolute w-full top-85 h-10"></div>
                    <button
                      className="underline text-xl cursor-pointer"
                      onClick={() => router.push("/price")}
                    >
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
                    Acesso a funcionalidade de relatório mensal, semanal e
                    diário
                  </li>
                  <li>Acesso a funcionalidade de gráficos</li>
                </ul>
              </div>
              <div className="w-full flex flex-col items-center mt-4 md:mt-0">
                <div className="h-13 flex items-center justify-center border-b-2 border-blue-900 w-full">
                  <div className="hidden md:block bg-white/50 absolute w-full top-85 h-10"></div>
                  <button
                    className="underline text-xl cursor-pointer"
                    onClick={() => router.push("/price")}
                  >
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

        {/* AVALIAÇÕES */}
        <div className="h-auto md:h-150 bg-blue-400 w-full flex flex-col justify-between text-white p-5 md:p-10">
          <h2 className="w-full md:w-110 text-xl md:text-2xl text-blue-900 font-bold text-center md:text-left">
            Veja algumas avaliações de nossos clientes:
          </h2>
          <div className="h-auto md:h-110 w-full md:overflow-hidden mt-6 md:mt-0">
            <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0 h-full w-full">
              <div className="h-auto md:h-100 w-full max-w-80 md:w-66 bg-white flex flex-col p-2.5 box-border rounded-xl gap-y-2.5">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-12 h-12 min-w-12 rounded-4xl overflow-hidden flex items-center justify-center border-2 border-blue-400">
                    <Image
                      src={"/images/evaluation_example/logo_1.jpg"}
                      width={100}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                  <p className="text-3sm font-bold text-blue-900">
                    Nexora Tecnologia
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                </div>
                <div className="grow w-full">
                  <p className="text-blue-400 px-2.5 text-sm">
                    O sistema facilitou muito o controle do nosso estoque. A
                    interface é intuitiva, as movimentações são registradas
                    rapidamente e os relatórios ajudam bastante nas decisões do
                    dia a dia. Desde a implantação, reduzimos significativamente
                    os erros de inventário.
                  </p>
                </div>
              </div>
              <div className="h-auto md:h-100 w-full max-w-80 md:w-66 bg-white flex flex-col p-2.5 box-border rounded-xl gap-y-2.5">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-12 h-12 min-w-12 rounded-4xl overflow-hidden flex items-center justify-center border-2 border-blue-400">
                    <Image
                      src={"/images/evaluation_example/logo_2.jpg"}
                      width={100}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                  <p className="text-3sm font-bold text-blue-900">
                    Verdear Sustentabilidade
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-gray-500" />
                </div>
                <div className="grow w-full">
                  <p className="text-blue-400 px-2.5 text-sm">
                    Precisávamos de uma solução simples e eficiente para
                    controlar materiais e insumos. O sistema atende muito bem às
                    nossas necessidades e ainda permite acompanhar o histórico
                    das movimentações. Apenas sentimos falta de mais opções de
                    personalização nos relatórios.
                  </p>
                </div>
              </div>
              <div className="h-auto md:h-100 w-full max-w-80 md:w-66 bg-white flex flex-col p-2.5 box-border rounded-xl gap-y-2.5">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-12 h-12 min-w-12 rounded-4xl overflow-hidden flex items-center justify-center border-2 border-blue-400">
                    <Image
                      src={"/images/evaluation_example/logo_3.jpg"}
                      width={100}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                  <p className="text-3sm font-bold text-blue-900">
                    Sabor & CIA Delivery
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-gray-500" />
                </div>
                <div className="grow w-full">
                  <p className="text-blue-400 px-2.5 text-sm">
                    Acompanhamos ingredientes e embalagens em tempo real, o que
                    reduziu desperdícios e melhorou o planejamento das compras.
                    O sistema é fácil de usar e atende muito bem nossa operação.
                  </p>
                </div>
              </div>
              <div className="h-auto md:h-100 w-full max-w-80 md:w-66 bg-white flex flex-col p-2.5 box-border rounded-xl gap-y-2.5">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-12 h-12 min-w-12 rounded-4xl overflow-hidden flex items-center justify-center border-2 border-blue-400">
                    <Image
                      src={"/images/evaluation_example/logo_4.jpg"}
                      width={100}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                  <p className="text-3sm font-bold text-blue-900">
                    Cuidar + Saude
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                </div>
                <div className="grow w-full">
                  <p className="text-blue-400 px-2.5 text-sm">
                    Controlamos medicamentos, materiais descartáveis e
                    equipamentos diariamente. O sistema tornou esse processo
                    muito mais seguro e eficiente. A funcionalidade de alerta
                    para estoque baixo nos ajuda a evitar falta de itens
                    essenciais.
                  </p>
                </div>
              </div>
              <div className="h-auto md:h-100 w-full max-w-80 md:w-66 bg-white flex flex-col p-2.5 box-border rounded-xl gap-y-2.5">
                <div className="flex items-center gap-x-2.5">
                  <div className="w-12 h-12 min-w-12 rounded-4xl overflow-hidden flex items-center justify-center border-2 border-blue-400">
                    <Image
                      src={"/images/evaluation_example/logo_5.jpg"}
                      width={100}
                      height={100}
                      alt="Logo"
                    />
                  </div>
                  <p className="text-3sm font-bold text-blue-900">Moda Viva</p>
                </div>
                <div className="w-full flex justify-center">
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                  <IoStarSharp className="text-3xl text-yellow-400" />
                </div>
                <div className="grow w-full">
                  <p className="text-blue-400 px-2.5 text-sm">
                    Gerenciar peças por categoria, tamanho e coleção ficou muito
                    mais simples. A consulta de produtos é rápida e os
                    relatórios ajudam bastante no controle do estoque. O sistema
                    trouxe mais agilidade para toda a equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
