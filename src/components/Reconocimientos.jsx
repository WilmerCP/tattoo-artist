import premio1 from '../assets/premios/premiocolor1.JPG'
import premio2 from '../assets/premios/premioblackwork1.JPG'
import premio3 from '../assets/premios/premiocolor2.jpg'
import Prize from './Prize'
import { useState, useRef } from 'react'
import { useCheckMobile } from '../hooks/useCheckMobile.js'

export default function Reconocimientos() {

    const [isSpread, setIsSpread] = useState(false);
    const isMobile = useCheckMobile();
    const buttonRef = useRef(null);

    const handleToggle = () => {
        // If we're closing on mobile, scroll to button
        if (isSpread && isMobile) {
            setTimeout(() => {
                buttonRef.current?.scrollIntoView({ 
              
                    block: 'nearest'
                });
            }, 0); 
        }
        setIsSpread(!isSpread);
    };

    return <section className="bg-black text-white pt-30 pb-10 px-4 flex flex-col gap-8 items-start justify-center md:gap-16">
        <div className="flex flex-col gap-6 w-full px-8 py-4 md:px-30 z-6 bg-black"
            style={{  boxShadow: '0 40px 50px 5px rgba(0,0,0,1)'}}
        >
            <h2 className="font-fancy md:text-5xl text-5xl text-center pb-4">Reconocimientos</h2>
            <p className="font-simple md:text-lg text-base">A lo largo de mi carrera como tatuador, he tenido el honor de recibir varios reconocimientos que reflejan mi dedicación y pasión por el arte del tatuaje. Estos premios no solo validan mi trabajo, sino que también me motivan a seguir perfeccionando mis habilidades y explorando nuevas técnicas.</p>
            <p ref={buttonRef} className="font-simple md:text-lg text-base">Cada premio y reconocimiento es un recordatorio de la importancia de la dedicación, la creatividad y el compromiso con la excelencia en el arte del tatuaje. Estoy agradecido por cada oportunidad de mostrar mi trabajo y espero seguir creciendo como artista en los años venideros.</p>

            {/* Animation Control Button */}
            <button
                onClick={handleToggle}
                className="mx-auto mt-6 px-8 py-3 bg-white text-black font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
                {isSpread ? "Apilar Premios" : "Mostrar Premios"}
            </button>
        </div>
        <div className={` md:px-20 w-full px-6 transition-all duration-700
                     ${isSpread ? ' flex flex-col md:flex-row gap-10 justify-center items-center md:mt-5 mt-10 mb-0' : '-mt-80 md:pb-20 mb-25 relative md:min-h-150 min-h-100'
            }`}>

            <div className={isSpread ? 'md:max-w-[25%] md:z-3 z-5' : 'absolute left-1/2 md:left-[40%] top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:z-3 z-5'}>
                <Prize onClick={handleToggle} image={premio1} title="Primer Lugar Color 🥇" description='Expotattoo Altos Mirandinos 2024' />
            </div>
            <div className={isSpread ? 'md:max-w-[28%] md:z-5 z-4' : 'absolute left-1/2 md:left-1/2 top-[60%] md:top-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:z-5 z-4'}>
                <Prize onClick={handleToggle} image={premio3} title="Segundo Lugar Color 🥈" description='Expotattoo Altos Mirandinos 2023' />
            </div>
            <div className={isSpread ? 'md:max-w-[25%] md:z-3 z-3' : 'absolute left-1/2 md:left-[60%] top-[65%] md:top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:z-3 z-3'}>
                <Prize onClick={handleToggle} image={premio2} title="Segundo Lugar Blackwork 🥈" description='Expotattoo Altos Mirandinos 2024' />
            </div>

        </div>
    </section>
}