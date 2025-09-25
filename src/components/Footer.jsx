
export default function Footer() {

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <footer className="bg-black text-white text-center py-8 px-8 flex flex-col gap-4 md:flex-row justify-between items-center">
            <div>
                <button onClick={scrollToTop} className="text-xs md:text-base hover:line-through underline text-white font-semibold uppercase">
                    Ir al inicio
                </button>
            </div>
            <div>
                <p className="text-xs md:text-sm uppercase mb-2">&copy; {new Date().getFullYear()} Erian Canelón. Todos los derechos reservados.</p>
                <p className="text-xs md:text-sm uppercase">Sitio desarrollado por Wilmer Cuevas</p>
            </div>
            <div className="hidden md:block">
                <a className="underline md:base text-white font-semibold uppercase hover:line-through" href="https://www.instagram.com/erian_canelon/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </div>
        </footer>
    );
}