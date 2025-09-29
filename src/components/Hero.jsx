import hero_image from '../assets/hero_erian.JPG'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Hero() {

    return (<section className="flex flex-col md:flex-row items-center justify-center bg-black text-white min-h-screen max-h-screen h-screen overflow-hidden">

        {/*Desktop Content*/}
        <div className="hidden md:block w-full md:w-1/2 p-8 text-center">
            <h1 className="text-9xl font-fancy">Erian Canelón</h1>
            <p className="text-2xl font-simple">Tattoo Artist</p>
            <p className='text-3xl flex items-center justify-center mt-4 gap-2 font-simple'>
                <FaLocationDot className='text-4xl ' /> Caracas/San Antonio, Venezuela
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-black font-simple font-bold hover:bg-gray-200 transition">
                <Link to="/tattoo-artist/galeria" >Galería de tatuajes</Link>
            </button>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 ">
            <img src={hero_image} alt="Hero" className="hero-image" />
        </div>

        {/*Mobile Content*/}
        <div className="md:hidden w-full h-full flex flex-col items-center justify-center text-center p-8 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <h1 className="text-6xl font-fancy">Erian Canelón</h1>
            <p className="text-xl font-simple">Tattoo Artist</p>
            <p className='text-base flex flex-col items-center justify-center mt-20 gap-3 font-simple'>
                <FaLocationDot className='text-2xl' /> Caracas / San Antonio, Venezuela
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-black font-simple font-bold hover:bg-gray-200 transition">
                <Link to="/tattoo-artist/galeria" >Galería de tatuajes</Link>
            </button>
        </div>
    </section>
    )


}