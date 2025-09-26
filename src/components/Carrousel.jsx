import { useState, useRef, useContext } from 'react';
import { useCheckMobile } from '../hooks/useCheckMobile';
import { getSizeClass, getRotationStyle } from '../lib/helpers.js';
import { TattooContext } from '../store/TattooContext.jsx';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../assets/anime/anime1.jpg'
import img2 from '../assets/color/color3.JPG'
import img3 from '../assets/microrealismo/microrealismo1.JPG'
import img4 from '../assets/color/color4.JPG'
import img5 from '../assets/microrealismo/microrealismo2.jpg'
import img6 from '../assets/fineline/fineline1.JPG'
import img7 from '../assets/blackwork/blackwork6.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useCheckMobile();

    const itemsToShow = isMobile ? 3 : 5;

    const { handleImageClick } = useContext(TattooContext);

    // Touch handling
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }

        // Reset values
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Navigation functions
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length-1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Get visible images
    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < itemsToShow; i++) {
            const imageIndex = (currentIndex + i) % images.length;
            visible.push({ src: images[imageIndex], originalIndex: imageIndex });
        }
        return visible;
    };

    const visibleImages = getVisibleImages();

    return (
        <section className='bg-black text-white md:py-32 py-24 px-4 flex flex-col gap-10 overflow-hidden'>
            <h2 className='text-center text-5xl md:text-8xl font-fancy'>Mi trabajo</h2>
            <p className='text-center md:text-2xl text-lg font-simple'>Cada tatuaje cuenta una historia única grabada en la piel</p>

            {/* Carousel Container */}
            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full md:p-3 p-2 transition-colors"
                    aria-label="Previous images"
                >
                    <FaChevronLeft className="text-white md:text-xl text-base justify-tex" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full md:p-3 p-2 transition-colors"
                    aria-label="Next images"
                >
                    <FaChevronRight className="text-white md:text-xl text-base" />
                </button>

                {/* Images with Touch Support */}
                <div
                    className='py-12 px-4 flex flex-row items-center justify-center gap-2 md:gap-5 transition-all duration-500 select-none'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but prevent horizontal browser swipe
                >
                    {visibleImages.map((item, index) => (
                        <div
                            key={`${currentIndex}-${index}`}
                            className={`${getSizeClass(index, itemsToShow)} flex-shrink-0 transition-all duration-500`}
                            style={getRotationStyle(index, itemsToShow)}
                            onClick={()=>handleImageClick(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={`Tattoo ${item.originalIndex + 1}`}
                                className="w-full h-full object-cover shadow-lg rounded-lg pointer-events-none"
                            />
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index
                                    ? 'bg-white'
                                    : 'bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}