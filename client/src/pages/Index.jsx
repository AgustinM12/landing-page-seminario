import Header from '../components/layout/Header.component.jsx';
import MyFooter from '../components/layout/Footer.component.jsx';
import '../assets/css/index.css';
import CoverParticulas from '../components/layout/Particulas.component.jsx';
import LottiePlayer from '../components/layout/Lottie.component.jsx';
import CourseCard from '../pages/Cursos.jsx'
import { HorizontalCardComponent } from "../components/HorizontalCard.component.jsx"
import { useEffect, useState, useRef } from 'react';

export const Index = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    if (isContentVisible) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isContentVisible]);

  const handleViewMoreClick = () => {
    setIsContentVisible(true);
    setTimeout(() => {
      const secondSectionPosition = secondSectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: secondSectionPosition,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <>
      <Header />
      <main className="mt-minus-20 align-items-center bg-gray-200">
        <section>
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Potencia tu productividad con  &lt;CodeTrain/&gt;
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  La aplicación de chat de IA de última generación, lleva tu rendimiento al siguiente nivel.
                </p>
              </div>
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="relative">
                  <div className=" flex-shrink-0 grid-cols-5 gap-y-10 lg:gap-y-5 ">
                    <div className="p-10 w-full overflow-hidden rounded-lg">
                      <div className="mt-4 h-auto w-auto max-w-full max-h-full object-cover object-center  ">
                        <LottiePlayer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <button
                onClick={handleViewMoreClick}
                className="inline-block rounded-md border border-transparent bg-blue-800 px-8 py-3 text-center font-medium text-white hover:bg-blue-900"
              >Ver más</button>
            </div>
          </div>
          <CourseCard />
          <CoverParticulas />
        </section>

        {/* //! MAS INFORMACION */}
        <section ref={secondSectionRef} className='bg-slate-800 text-center pt-5 p-10'>
          <h1 className='font-bold text-center text-3xl pb-20'>¿Qué es &lt;CodeTrain/&gt;?</h1>

          <div className='flex flex-col space-y-5'>
            <HorizontalCardComponent orientation={1} cardTitle='¿Sobre que va la plataforma?' title='' description='CodeTrain es una plataforma inteligente e interactiva para la enseñanza de programación que incorpora interacción con modelos IA de lenguaje multimodal, capaz de ofrecer un entorno enriquecedor y dinámico para aprender a programar de manera efectiva y atractiva.
            No solo proporcionamos instrucción y recursos educativos, sino que también facilitamos la interacción directa con un asistente de inteligencia artificial para resolver dudas, obtener ejemplos de código y practicar la escritura de programas y probarlos en tiempo real.' />

            <HorizontalCardComponent cardTitle='¿Qué cursos ofrecemos?' title='Algunos de nuestros cursos disponibles al publico'>

            </HorizontalCardComponent>

            <HorizontalCardComponent orientation={1} cardTitle='¿De que funcionalidades dispondras?' title='' description='' />
          </div>
        </section>
      </main>
      {/* <MyFooter /> */}
    </>
  );
};
