import img1 from '../assets/anime/anime1.jpg'
import img2 from '../assets/color/color3.JPG'
import img3 from '../assets/microrealismo/microrealismo1.JPG'
import img4 from '../assets/color/color4.JPG'
import img5 from '../assets/microrealismo/microrealismo2.jpg'
import img6 from '../assets/fineline/fineline1.JPG'
import img7 from '../assets/blackwork/blackwork6.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Display() {

    // Function to get size class based on position from center
    const getSizeClass = (index) => {
        const center = Math.floor(images.length / 2); // Center index (2 for 5 images)
        const distance = Math.abs(index - center); // Distance from center

        switch (distance) {
        case 0: return "w-20 h-28 md:w-48 md:h-64"; // Center - smallest
        case 1: return "w-24 h-32 md:w-56 md:h-72"; // Next to center
        case 2: return "w-28 h-36 md:w-64 md:h-80";
        case 3: return "w-32 h-40 md:w-72 md:h-96"; // Edges - largest
        default: return "w-32 h-40 md:w-72 md:h-96";
    }
    };

    // Function to get rotation class
    const getRotationClass = (index) => {
        const center = Math.floor(images.length / 2);

        if (index < center) {
            // Left side - tilt left
            const distance = center - index;
            switch (distance) {
                case 1: return "-rotate-3";
                case 2: return "-rotate-6";
                case 3: return "-rotate-12";
                default: return "-rotate-12";
            }
        } else if (index > center) {
            // Right side - tilt right
            const distance = index - center;
            switch (distance) {
                case 1: return "rotate-3";
                case 2: return "rotate-6";
                case 3: return "rotate-12";
                default: return "rotate-12";
            }
        } else {
            return "rotate-0"; // Center - no rotation
        }
    };

    // Function to get Y-axis rotation style
    const getRotationStyle = (index) => {
        const center = Math.floor(images.length / 2);
        const perspective = window.innerWidth < 768 ? '600px' : '1000px';

        if (index < center) {
            // Left side - rotate to face inward
            const distance = center - index;
            switch (distance) {
            case 1: return { transform: `perspective(${perspective}) rotateY(15deg)` };
            case 2: return { transform: `perspective(${perspective}) rotateY(30deg)` };
            case 3: return { transform: `perspective(${perspective}) rotateY(45deg)` };
            default: return { transform: `perspective(${perspective}) rotateY(45deg)` };
        }
        } else if (index > center) {
            // Right side - rotate to face inward
            const distance = index - center;
            switch (distance) {
            case 1: return { transform: `perspective(${perspective}) rotateY(-15deg)` };
            case 2: return { transform: `perspective(${perspective}) rotateY(-30deg)` };
            case 3: return { transform: `perspective(${perspective}) rotateY(-45deg)` };
            default: return { transform: `perspective(${perspective}) rotateY(-45deg)` };
        }
        } else {
            return { transform: 'perspective(1000px) rotateY(0deg)' }; // Center - no rotation
        }
    };

    return <section className='bg-black text-white md:py-50 py-32 px-4 flex flex-col gap-10 overflow-x-hidden'>

        <h2 className='text-center text-5xl md:text-8xl font-fancy uppercase'>Mi trabajo</h2>
        <p className='text-center md:text-2xl text-lg font-simple'>Cada tatuaje cuenta una historia única grabada en la piel</p>
        <div className='py-12 px-4 flex flex-row items-center justify-center gap-5 md:overflow-x-scroll'>

            {images.map((src, index) => (
                <div key={index} className={`${getSizeClass(index)} flex-shrink-0`}
                    style={getRotationStyle(index)}>
                    <img src={src} alt={`Tattoo ${index + 1}`} className="w-full h-full object-cover shadow-lg" />
                </div>
            ))}

        </div>
    </section>

}