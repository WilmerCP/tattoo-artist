// Function to get size class based on position in carousel
export function getSizeClass(index, itemsToShow){
    const center = Math.floor(itemsToShow / 2);
    const distance = Math.abs(index - center);

    switch (distance) {
        case 0: return "w-32 h-48 md:w-48 md:h-64"; // Center - smallest
        case 1: return "w-32 h-42 md:w-56 md:h-72"; // Next to center
        case 2: return "w-28 h-36 md:w-64 md:h-80"; // Edges - largest
        default: return "w-28 h-36 md:w-64 md:h-80";
    }
};

// Function to get Y-axis rotation style
export function getRotationStyle(index, itemsToShow){
    const center = Math.floor(itemsToShow / 2);
    const perspective = typeof window !== 'undefined' && window.innerWidth < 768 ? '600px' : '1000px';
    const isMobile = itemsToShow === 3;
    const symbol = isMobile ? "-" : "";
    const symbolInverted = isMobile ? "" : "-";

    if (index < center) {
        const distance = center - index;
        switch (distance) {
            case 1: return { transform: `perspective(${perspective}) rotateY(${symbol}15deg)` };
            case 2: return { transform: `perspective(${perspective}) rotateY(${symbol}30deg)` };
            default: return { transform: `perspective(${perspective}) rotateY(${symbol}30deg)` };
        }
    } else if (index > center) {
        const distance = index - center;
        switch (distance) {
            case 1: return { transform: `perspective(${perspective}) rotateY(${symbolInverted}15deg)` };
            case 2: return { transform: `perspective(${perspective}) rotateY(${symbolInverted}30deg)` };
            default: return { transform: `perspective(${perspective}) rotateY(${symbolInverted}30deg)` };
        }
    } else {
        return { transform: `perspective(${perspective}) rotateY(0deg)` };
    }
};
