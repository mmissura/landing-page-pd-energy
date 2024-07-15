import { BsWhatsapp } from 'react-icons/bs';
import Logo1 from './assets/images/logo2.png';

export const App = () => {
  return (
    <div className='w-full'>
      <div className='w-3/4 m-auto grid grid-cols-2 p-4 justify-between items-center'>
        <div className='w-full'>
          <img
            src={Logo1}
            className='w-28'
            alt='Logo PD Energy'
            title='Logo PD Energy'
          />
        </div>

        <nav className='w-full'>
          <ul className='flex justify-end gap-4 2xl:text-2xl xl:text-2xl text-lg'>
            <li>MENU</li>
            <li>MENU</li>
          </ul>
        </nav>
      </div>

      <div className='bg-image'>
        <div className='w-full bg-black bg-opacity-30 py-14'>
          <div className='2xl:w-3/4 xl:w-3/4 w-full h-full m-auto 
          grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 p-4 gap-6 justify-between items-center'>
            <div className='w-full'>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/fJ5X6Dve3RY?si=pjpGdbInnCeycWiX&amp;controls=0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
            <div className='w-full'>
              <h2 className='text-green-300 text-center 
              2xl:text-5xl xl:text-5xl lg:text-5xl text-4xl font-semibold'>
                Texto curto com ênfase no produto
                {/* Juros de 7%<br></br> 10 anos para pagar<br></br> Até 2 anos de carência para investimento */}
                </h2>
              <div className='mt-4 text-white 2xl:text-2xl cl:text-2xl text-xl text-center'>
              <p>
                Descrição sobre o plano safra.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='2xl:w-1/2 xl:w-1/2 w-full h-full m-auto grid 2xl:grid-cols-0 
      xl:grid-cols-0 grid-cols-1 p-4 gap-6 justify-center items-center'>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/fJ5X6Dve3RY?si=pjpGdbInnCeycWiX&amp;controls=0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

      <h1
        className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-10 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold uppercase'
      >
        Quer saber mais? Entre em contato e solicite um orçamento
      </h1>

      <div className='flex justify-center items-center'>
        <a
          href='https://wa.me/5519991711316'
          target='_blank'
          className='bg-green-700 text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-12'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </div>
      <footer
        className='text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm'
      >
        &copy; Copyright 2024 by Missura Networks
        <p className='text-center'>CNPJ: 53.447.302/0001-79</p>
      </footer>
    </div>
  );
};
