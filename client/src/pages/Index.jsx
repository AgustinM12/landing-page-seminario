import Header from '../components/layout/Header.component.jsx';
import MyFooter from '../components/layout/Footer.component.jsx';
import '../assets/css/index.css';
import CoverParticulas from '../components/layout/Particulas.component.jsx';
import LottiePlayer from '../components/layout/Lottie.component.jsx';
import CourseCard from '../pages/Cursos.jsx'
import { HorizontalCardComponent } from "../components/HorizontalCard.component.jsx"
import { FlipCardComponent } from "../components/FlipCard.component.jsx"
import { useEffect, useState, useRef } from 'react';
import { temas } from "../data/cursos.js"

export const Index = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const secondSectionRef = useRef(null);

  const getRandomThree = (arr) => {
    // Clonar el array original para no modificarlo
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    // Devolver los primeros tres elementos del array mezclado
    return shuffled.slice(0, 3);
  };

  const randomTemas = getRandomThree(temas);

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
      <main className="mt-minus-20 align-items-center bg-gray-200" onDoubleClick={handleViewMoreClick}>
        <section className='h-screen'>
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg pb-2">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Potencia tu productividad con  &lt;CodeTrain/&gt;
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  La aplicación de chat de IA de última generación, lleva tu rendimiento al siguiente nivel.
                </p>
              </div>

              {/* //* ROBOT */}
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="relative">
                  <div className=" flex-shrink-0 grid-cols-5 gap-y-10 lg:gap-y-5 ">
                    <div className="p-10 w-full overflow-hidden rounded-lg">
                      <div className="h-auto w-auto max-w-full max-h-full object-cover object-center">
                        <LottiePlayer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleViewMoreClick}
                className="inline-block rounded-md border border-transparent bg-blue-800 px-8 py-4 text-center font-medium text-white hover:bg-blue-900"
              >Ver más</button>

            </div>
          </div>
          <CourseCard />
          <CoverParticulas />
        </section>

        {/* //! MAS INFORMACION */}
        <section ref={secondSectionRef} className='bg-slate-800 text-center pt-5 p-10'>
          <h1 className='font-bold text-center text-white text-3xl pb-20'>¿Qué es &lt;CodeTrain/&gt;?</h1>

          <div className='flex flex-col space-y-5'>
            <HorizontalCardComponent orientation={1} img='https://th.bing.com/th/id/OIP.OC4Bv5A3iYKPvSQFaWjwVwHaHc?w=634&h=638&rs=1&pid=ImgDetMain' cardTitle='¿Sobre que va la plataforma?' title='¡Conoce a &lt;CodeTrain/&gt;!' description='CodeTrain es una plataforma inteligente e interactiva para la enseñanza de programación que incorpora interacción con modelos IA de lenguaje multimodal, capaz de ofrecer un entorno enriquecedor y dinámico para aprender a programar de manera efectiva y atractiva.
            No solo proporcionamos instrucción y recursos educativos, sino que también facilitamos la interacción directa con un asistente de inteligencia artificial para resolver dudas, obtener ejemplos de código y practicar la escritura de programas y probarlos en tiempo real.' />

            <HorizontalCardComponent cardTitle='¿Qué cursos ofrecemos?' img='https://th.bing.com/th/id/OIP.OC4Bv5A3iYKPvSQFaWjwVwHaHc?w=634&h=638&rs=1&pid=ImgDetMain' title='Algunos de nuestros cursos disponibles al publico'>

              {
                randomTemas?.map((tema, key) => (
                  <FlipCardComponent img={tema?.url} title={tema?.titulo} list={tema?.temas} />
                ))
              }

            </HorizontalCardComponent>

            <HorizontalCardComponent orientation={1} img='https://th.bing.com/th/id/OIP.OC4Bv5A3iYKPvSQFaWjwVwHaHc?w=634&h=638&rs=1&pid=ImgDetMain' cardTitle='¿De que funcionalidades dispondras?' title='Las principales funcionalidades de nuestra plataforma son:' >
              <div className='flex flex-col justify-start text-start'>
                <li>Editor de Codigo Integrado (IDE): </li>
                <p></p>

                <li>Generacion de actividades de manera adaptativa: </li>
                <p></p>

                <li>Mentoria y correccion 24/7:</li>
                <p></p>
              </div>
            </HorizontalCardComponent>
          </div>
        </section>
      </main>
      <MyFooter />
    </>
  );
};
