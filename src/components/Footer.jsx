import { Link, useLocation } from "react-router-dom";

export default function Footer() {

    const location = useLocation();
    const currentPath = location.pathname;

    const isHomePage = currentPath === '/tattoo-artist/' || currentPath === '/tattoo-artist';
    const isGalleryPage = currentPath === '/tattoo-artist/galeria';


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-black text-white text-center py-8 px-8 flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
            <div>
                <button onClick={scrollToTop} className="hidden md:block text-xs md:text-base hover:line-through underline text-white font-semibold uppercase">
                    Ir al principio
                </button>
            </div>
            <div>
                <p className="text-xs md:text-sm uppercase mb-2">&copy; {new Date().getFullYear()} Erian Canelón. Todos los derechos reservados.</p>
                <p className="text-xs md:text-sm uppercase">Sitio desarrollado por Wilmer Cuevas</p>
            </div>
            <div className="flex gap-2">
                <a className="underline md:base text-white md:text-base text-xs font-semibold uppercase hover:line-through" href="https://www.instagram.com/erian_canelon/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                {!isGalleryPage &&
                    <Link className="underline md:base text-xs md:text-base text-white font-semibold uppercase hover:line-through" to="/tattoo-artist/galeria">
                        Galería
                    </Link>}
                {!isHomePage &&
                    <Link className="underline md:base text-xs md:text-base text-white font-semibold uppercase hover:line-through" to="/tattoo-artist/">
                        Inicio
                    </Link>}
                <button onClick={scrollToTop} className="md:hidden text-xs md:text-base hover:line-through underline text-white font-semibold uppercase">
                    Ir al principio
                </button>
            </div>
        </footer>
    );
}