import { BsWhatsapp } from 'react-icons/bs';
import { GiCheckMark } from "react-icons/gi";

export const App = () => {
 

  return (
    <div className='w-full'>
      <div className='w-3/4 m-auto grid grid-cols-2 p-4 justify-between items-center'>
        <div className='w-full'>
          <img
            src='https://pdenergy.com.br/planosafra/assets/logo2-0bbc4435.png'
            className='w-28'
            alt='Logo PD Energy'
            title='Logo PD Energy'
          />
        </div>

        <nav className='w-full'>
          <ul className='flex justify-end gap-4 2xl:text-2xl xl:text-2xl'>

            <a
              href='https://wa.me/5519991711316?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20geração%20de%20energia%20solar%20rural.'
              target='_blank'
              className='bg-green-700 text-white 2xl:text-xl xl:text-xl lg:text-xl text-xl 
                py-3 px-10 2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center gap-3 rounded-xl my-12 cursor-pointer hover:bg-green-900'
            >
              <BsWhatsapp /> Fale conosco
            </a>
          </ul>
        </nav>
      </div>

      <div className='bg-image'>
        <div className='w-full bg-black bg-opacity-70 py-14'>
          <div
            className='2xl:w-3/4 xl:w-3/4 lg:w-3/4 w-full h-full m-auto 
          grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 p-4 gap-6 justify-between items-center'
          >
            <div className='w-full'>

              <div className='mb-10 text-white 2xl:text-3xl lg:text-3xl text-3xl text-center font-bold'>
                <p>Aproveite a oportunidade para gerar sua própria energia elétrica investindo em painéis fotovoltaicos. Quer saber como?

                  <div className='flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center'>

                      <a
                        href='https://wa.me/5519991711316?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20geração%20de%20energia%20solar%20rural.'
                        target='_blank'
                        className='bg-green-700 text-white 2xl:text-xl xl:text-xl lg:text-xl text-xl py-3 px-10 
          2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center gap-3 rounded-xl my-12 cursor-pointer hover:bg-green-900'
                      >
                        <BsWhatsapp /> Entre em contato agora mesmo
                      </a>
                    </div>
                  </div>
                </p>
              </div>

              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/tnXfbyLO4AI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>


            </div>
            <div className='w-full'>
              <h2
                className='text-green-400 text-center 
              2xl:text-3xl 2xl:text-start xl:text-3xl lg:text-3xl text-3xl font-bold'
              >
                <div className='text-center flex justify-center items-center'>
                  <ul>
                    <li className='text-6xl text-white'>Pronaf:</li><br></br>
                    <li className='flex justify-start items-start'><GiCheckMark />Juros de 2,5% ao ano</li>
                    <li className='flex justify-start items-start'><GiCheckMark />Até 100 mil reais de crédito</li>
                    <li className='flex justify-start items-start'><GiCheckMark />Até 12 anos para pagar</li><br></br>
                  </ul>
                </div>

                <div className='text-center flex justify-center items-center'>
                  <ul>
                    <li className='text-6xl text-white'>Pronamp:</li><br></br>
                    <li className='flex justify-start items-start'><GiCheckMark />Juros de até 8% ao ano</li>
                    <li className='flex justify-start items-start'><GiCheckMark />Projetos de até 600 mil reais</li>
                    <li className='flex justify-start items-start'><GiCheckMark />Até 10 anos para pagar</li>
                    <li className='flex justify-start items-start'><GiCheckMark />2 anos de carência</li>
                  </ul>
                </div>

              </h2>

            </div>
          </div>
        </div>
      </div>

      <section
        className='2xl:w-1/2 xl:w-1/2 w-full h-full m-auto grid 2xl:grid-cols-0 mt-20
      xl:grid-cols-0 grid-cols-1 p-4 gap-6 justify-center items-center' id='test'
      >
        <iframe
          width='100%'
          height='315'
          src='https://www.youtube.com/embed/LT6-A7-_VKs'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </section>

      <h1
        className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-10 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold px-4'
      >
        Quer saber mais? Solicite um orçamento agora.
      </h1>

      <section className='flex justify-center items-center' id='contact'>
        <a
          href='https://wa.me/5519991711316?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20geração%20de%20energia%20solar%20rural.'
          target='_blank'
          className='bg-green-700 text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-12 cursor-pointer hover:bg-green-900'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </section>



      <footer
        className='text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm m-auto'
      >
        Copyright © 2024 PD Energy. CNPJ 22.575.893/0001-36. Desenvolvido por Missura Networks.
      </footer>
    </div>
  );
};
