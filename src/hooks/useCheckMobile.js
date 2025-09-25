import { useState, useEffect } from 'react';

export function useCheckMobile() {

    const [isMobile, setIsMobile] = useState(false);
        
        // Detect mobile screen size
        useEffect(() => {
            const checkIsMobile = () => {
                setIsMobile(window.innerWidth < 768);
            };
    
            checkIsMobile(); // Check on mount
            window.addEventListener('resize', checkIsMobile);
    
            return () => window.removeEventListener('resize', checkIsMobile);
        }, []);
    
    return isMobile;

}