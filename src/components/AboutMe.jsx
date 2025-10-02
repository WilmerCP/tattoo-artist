import erian from '../assets/hero_erian.JPG';

export default function AboutMe() {
    return (
        <section className="bg-black text-white p-8 flex flex-col-reverse gap-8 items-start justify-center md:flex-row md:gap-16">

            <img src={erian} alt="Erian Canelón" className='md:max-w-1/2 md:w-lg h-auto w-full' />
            <div className='flex flex-col gap-6 max-w-2xl md:w-1/2 w-full px-3 md:py-20 py-4'>
                <h2 className="font-fancy md:text-5xl text-5xl text-center pb-4">Acerca de</h2>
                <p className="font-simple md:text-lg text-base">
                    Mi nombre es Erian Moises y empecé a tatuar a inicios del año 2021. Mis primeros pasos como artista del tatuaje los di en el estudio Orishas Ink como aprendiz, ubicado en los Altos Mirandinos.
                </p>
                <p className="font-simple md:text-lg text-base ">
                    Desde que empecé en el mundo del tatuaje he tenido como objetivo ser versátil en distintos estilos, pero en lo que más se destaca mi trabajo son los diseños ilustrativos tanto en Blackwork como color, la caricatura y la línea fina. 
                </p>
                <p className="font-simple md:text-lg text-base  ">
                    Llevo dibujando desde que tenía 3 años de edad, el arte de plasmar obras desde el papel a la piel es algo completamente increíble y vale mucho la pena en seguir aprendiendo cada día en esta área.
                </p>

            </div>
        </section>
    );
}