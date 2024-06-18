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
    return shuffled.slice(0, 4);
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
      <main className="mt-minus-20 bg-gray-200" onDoubleClick={handleViewMoreClick}>
        <section className='h-screen'>
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-20 lg:pt-20">

            <div className="max-w-screen px-4 sm:static sm:px-6 lg:px-8">
              <div className="pb-2">

                <div className='flex flex-row justify-between'>
                  <div className='max-w-lg'>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl max-w-lg">
                      Potencia tu productividad con &lt;CodeTrain/&gt;
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 pb-4">
                      La plataforma potenciada con IA para lleva tu rendimiento y aprendizaje al siguiente nivel.
                    </p>
                    <button
                      onClick={handleViewMoreClick}
                      className="inline-block rounded-md border border-transparent bg-blue-700 px-8 py-4 text-center font-medium text-white hover:bg-blue-900 transition-all duration-300 hover:scale-110 "
                    >Ver más</button>
                  </div>
                  <div className='px-16 '>
                    <LottiePlayer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CourseCard />
          <CoverParticulas />
        </section>

        {/* //! MAS INFORMACION */}
        <section ref={secondSectionRef} className='bg-slate-800 text-center pt-5 p-10'>
          <h2 className='font-bold text-center text-white text-3xl pb-20'>¿Qué es <span className='font-bold bg-gradient-to-t from-red-500 to-fuchsia-500 via-cyan-300 text-transparent bg-clip-text'>&lt;CodeTrain/&gt;</span>?</h2>

          <div className='flex flex-col space-y-5'>
            <HorizontalCardComponent orientation={1} img='https://th.bing.com/th/id/OIP.OC4Bv5A3iYKPvSQFaWjwVwHaHc?w=634&h=638&rs=1&pid=ImgDetMain' cardTitle='¿Sobre que va la plataforma?' title='¡Conoce a &lt;CodeTrain/&gt;!' description='CodeTrain es una plataforma de cursos y formaciones inteligente e interactiva para la enseñanza de programación que incorpora interacción con modelos IA de lenguaje multimodal, capaz de ofrecer un entorno enriquecedor y dinámico para aprender a programar de manera efectiva y atractiva.
            No solo proporcionamos instrucción y recursos educativos, sino que también facilitamos la interacción directa con un asistente de inteligencia artificial para resolver dudas, obtener ejemplos de código y practicar la escritura de programas y probarlos en tiempo real.' />

            <HorizontalCardComponent orientation={0} img='https://th.bing.com/th/id/OIP.1qrtVjrTZ8lgiaU80kcGQgHaHa?w=980&h=980&rs=1&pid=ImgDetMain' cardTitle='Deberias probarla si...' title='Apuntamos a ser una herramienta util para:' >
              <div className='flex flex-col justify-start text-start'>
                <li>Educadores e Instituciones educativas públicas o privadas.</li>
                <li>Autodidactas y entusiastas de la programación.</li>
                <li>Profesionales en Transición de Carrera.</li>
                <li>Desarrolladores de Software Junior.</li>
                <li>Estudiantes Universitarios y de Programación.</li>
              </div>
            </HorizontalCardComponent>

            <HorizontalCardComponent orientation={1} cardTitle='¿Qué cursos ofrecemos?' img='https://ga.com.mx/wp-content/uploads/2016/05/training.png' title='Algunos de nuestros cursos disponibles al publico'>

              {
                randomTemas?.map((tema, key) => (
                  <FlipCardComponent img={tema?.url} title={tema?.titulo} list={tema?.temas} />
                ))
              }

            </HorizontalCardComponent>

            <HorizontalCardComponent orientation={0} img='https://web3canvas.com/wp-content/uploads/2013/10/deals.jpg' cardTitle='¿De que funcionalidades dispondras?' title='Las principales funcionalidades de nuestra plataforma son:' >
              <div className='flex flex-col justify-start text-start'>
                <li className='font-bold'>Editor de Codigo Integrado (IDE): </li>
                <p>Un espacio donde los estudiantes puedan escribir, probar y depurar su código directamente en la plataforma </p>

                <li className='font-bold'>Generacion de actividades de manera adaptativa: </li>
                <p>Adaptación de los contenidos y los
                  retos según el progreso y las preferencias del estudiante, utilizando
                  algoritmos de inteligencia artificial.</p>

                <li className='font-bold'>Mentoria y correccion 24/7:</li>
                <p>Evaluación inmediata de los ejercicios de codificación y selección con sugerencias de mejora y correcciones. Soporte teorico para los temas de los cursos</p>
              </div>
            </HorizontalCardComponent>

            <HorizontalCardComponent orientation={1} img='https://th.bing.com/th/id/OIP.GBxNXSFXK4n5CC0wLoYNzgAAAA?rs=1&pid=ImgDetMain' cardTitle='¿Qué modelos de IA utilizamos?' title='Los principales modelos de lenguaje utilizados en la plataforma son:' >
              <div className='flex flex-col justify-start text-start'>
                <li className='font-bold'>Generacion de actividades:</li>
                <p>Gemini AI</p>
                <p>Llama 3</p>
                <li className='font-bold'>Corrección de actividades:</li>
                <p>CodeGemma</p>
                <p>Phi 3</p>
                <p>OpenChat</p>
              </div>
            </HorizontalCardComponent>
          </div>
        </section>
      </main>
      <MyFooter />
    </>
  );
};
