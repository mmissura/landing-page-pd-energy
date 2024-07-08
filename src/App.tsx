import { BsWhatsapp } from 'react-icons/bs';
import Logo1 from './assets/images/logo2.png';


export const App = () => {
  return (
    <div className="w-full">
      <div className="bg-yellow-500">
        <div className='flex flex-cel justify-center'>
          <img src={Logo1} className='mt-20' alt="Logo PD Energy" title='Logo PD Energy' />
        </div>

        <h2 className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-32 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold uppercase'>
          Quer investir em Energia fotovoltáica com juros de 7% com 10 anos
          pra pagar e até 2 anos de carência para investimento?</h2>

        <div className="bg-gradient-to-r opacity-80 from-cyan-500 to-blue-500 w-full mt-28 py-10 px-12 shadow-lg">
          
          <h2 className='text-6xl text-center 2xl:text-6xl xl:text-6xl lg:text-6xl text-yellow-500
           my-10 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold uppercase'>PLANO SAFRA</h2>

          <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl text-white mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-light">
            Para impulsionar o setor agropecuário brasileiro,
            o Governo Federal lança o Plano Safra 2024/2025, no âmbito do
            Ministério da Agricultura e Pecuária (Mapa), oferecendo linhas de
            crédito, incentivos e políticas agrícolas para médios e grandes
            produtores. Neste ano safra, são R$ 400,59 bilhões destinados
            para financiamentos, um aumento de 10% em relação à safra anterior. <br></br>
            Ainda, os produtores rurais podem contar com mais R$ 108 bilhões
            em recursos de Letras de Crédito do Agronegócio (LCA), para emissões
            de Cédulas do Produto Rural (CPR), que serão complementares aos
            incentivos do novo Plano Safra. No total, são R$ 508,59 bilhões
            para o desenvolvimento do agro nacional. <br></br>
            O Programa para Financiamento a Sistemas de Produção Agropecuária
            Sustentáveis (RenovAgro) incorpora os financiamentos de investimentos
            identificados com o objetivo de incentivo à Adaptação à Mudança do Clima e
            Baixa Emissão de Carbono na Agropecuária.<br></br>
            Na linha de financiamento para investimentos, são 13 programas que
            proporcionam a inovação e a modernização das atividades produtivas,
            contribuindo para a continuidade dos ganhos de produtividade,
            competitividade, emprego e renda.

          </p>
        </div>


        <h1 className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-10 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold uppercase'>
          Quer saber mais? Entre em contato e solicite um orçamento</h1>

        <div className='flex justify-center items-center'>
          <a
            href="https://wa.me/5519991711316"
            target="_blank"
            className="bg-green-700 text-white py-3 px-5 flex justify-center items-center gap-3 rounded-xl mb-12"
          >

            <BsWhatsapp /> Fale conosco
          </a>
        </div>
        <footer className="text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm">
          &copy; Copyright 2024 by Missura Networks
          <p className="text-center">CNPJ: 53.447.302/0001-79</p>
        </footer>
      </div>
    </div>
  );
};
