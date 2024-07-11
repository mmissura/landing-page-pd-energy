import { BsWhatsapp } from 'react-icons/bs';
import Logo1 from './assets/images/logo2.png';


export const App = () => {
  return (
    <div className="w-full">
      <div>
        <div className='flex justify-center'>
          <img src={Logo1} className='mt-10' alt="Logo PD Energy" title='Logo PD Energy' />
        </div>

        <div className="flex flex-col justify-between w-full py-10 px-12">

          <h2 className='text-5xl text-center 2xl:text-6xl xl:text-6xl lg:text-6xl 
           my-10 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold uppercase'>PLANO SAFRA</h2>

          <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-light">
            Texto e vídeo(s) nesta área
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
