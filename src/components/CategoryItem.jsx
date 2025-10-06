import { useNavigate } from "react-router-dom"
import { useCheckMobile } from "../hooks/useCheckMobile";

export default function CategoryItem({ name, img}) {

    const navigate = useNavigate();
    const isMobile = useCheckMobile();

    const handleClick = (category) => {
        // Navigate to the category page with the category name in lowercase
        navigate(`/galeria/?categoria=${name.toLowerCase()}`);
    };

    return <div className='border-1 border-zinc-200 md:p-8 p-4 md:min-h-130 md:h-fit min-h-40 flex items-end justify-baseline relative hover:scale-105 transition-all duration-300'
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        onClick={handleClick}
        >

        <h3 className='font-simple font-extrabold uppercase md:text-3xl text-xl text-white text-shadow-xl text-shadow-black'
        style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            writingMode: isMobile ? undefined : 'vertical-rl',
            textOrientation: isMobile ? 'initial' : 'mixed',      
            letterSpacing: isMobile ? 'initial' : '0.1em'   
        }}>{name}</h3>

    </div>
}