import { useState, useRef, useEffect } from 'react';
import { useCheckMobile } from '../hooks/useCheckMobile.js';

export default function ZoomImage({ image, ...props }) {

    const [zoomDisplay, setZoomDisplay] = useState('none');
    const [zoom, setZoom] = useState({

        x: 0,
        y: 0,
        scale: 1

    });
    const [lastTouchDistance, setLastTouchDistance] = useState(0);
    const [lastTouchCenter, setLastTouchCenter] = useState({ x: 0, y: 0 });
    const [imageAspectRatio, setImageAspectRatio] = useState(1);
    const [initialPinchCenter, setInitialPinchCenter] = useState({ x: 0, y: 0 });
    const isMobile = useCheckMobile();


    const containerRef = useRef(null);


    function handleMouseMove(e) {

        if(isMobile) return;

        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within element
        const y = e.clientY - rect.top;  // Y position within element

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        console.log(`X: ${x}, Y: ${y}`);
        console.log(`X%: ${xPercent}, Y%: ${yPercent}`);

        setZoomDisplay('block');
        setZoom({ x: xPercent, y: yPercent });

    }

    const getTouchDistance = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const getTouchCenter = (touches) => {
        if (touches.length == 2) {
            return {
                x: (touches[0].clientX + touches[1].clientX) / 2,
                y: (touches[0].clientY + touches[1].clientY) / 2
            };
        } else if (touches.length == 1) {
            return {
                x: touches[0].clientX,
                y: touches[0].clientY
            };
        }
    };

    function handleTouchStart(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const distance = getTouchDistance(e.touches);
            const center = getTouchCenter(e.touches);
            setLastTouchDistance(distance);
            setLastTouchCenter({ x: center.x, y: center.y });
            setInitialPinchCenter(center);

            // Center the zoom when touch starts
            setZoom({
                x: 50, // Center horizontally
                y: 50, // Center vertically
                scale: 1
            });
        }

    }

    const handleTouchMove = (e) => {
        e.preventDefault();

        if (e.touches.length === 2) {
            // Two finger pinch zoom
            const currentDistance = getTouchDistance(e.touches);
            const currentCenter = getTouchCenter(e.touches);

            // Calculate zoom scale change with reduced sensitivity
            const rawScaleChange = currentDistance / lastTouchDistance;
            const dampingFactor = 0.9; // Reduce from 1.0 to make it less sensitive
            const scaleChange = 1 + (rawScaleChange - 1) * dampingFactor;

            const newScale = Math.min(Math.max(zoom.scale * scaleChange, 1), 5);

            // Calculate offset from initial pinch center
            const offsetX = currentCenter.x - initialPinchCenter.x; // Pixel offset
            const offsetY = currentCenter.y - initialPinchCenter.y; // Pixel offset


            // Convert offset to percentage of container size
            const rect = containerRef.current.getBoundingClientRect();
            const offsetXPercent = (offsetX / rect.width) * 100;
            const offsetYPercent = (offsetY / rect.height) * 100;

            // Apply offset to centered position (50% + offset)
            const newX = Math.min(Math.max(50 + offsetXPercent, 0), 100);
            const newY = Math.min(Math.max(50 + offsetYPercent, 0), 100);

            setZoom({
                x: newX,
                y: newY,
                scale: newScale
            });

            setZoomDisplay(newScale > 1 ? 'block' : 'none');
            setLastTouchDistance(currentDistance);
            setLastTouchCenter(currentCenter);

        } else {
            setZoomDisplay('none');
            setZoom({
                x: 0,
                y: 0,
                scale: 1
            });
            setLastTouchCenter({ x: 0, y: 0 });
            setLastTouchDistance(0);
        }
    };

    const handleTouchEnd = (e) => {

        setZoomDisplay('none');
        setZoom({
            x: 0,
            y: 0,
            scale: 1
        });
        setLastTouchCenter({ x: 0, y: 0 });
        setLastTouchDistance(0);
        setInitialPinchCenter({ x: 0, y: 0 });

    };

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageAspectRatio(img.width / img.height);
        };
        img.src = image;
    }, [image]);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        if (!isMobile) return;

        element.addEventListener('touchstart', handleTouchStart, { passive: false });
        element.addEventListener('touchmove', handleTouchMove, { passive: false });
        element.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchmove', handleTouchMove);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchMove]);

    // Calculate dimensions for mobile ::before element
    const baseHeight = 200;
    const baseWidth = baseHeight * imageAspectRatio; // Maintain aspect ratio
    const zoomWidth = `${baseWidth * zoom.scale}px`;
    const zoomHeight = `${baseHeight * zoom.scale}px`;
    const backgroundSize = `${100 * zoom.scale}%`; // Keep for ::after

    const opacityClass = (zoom.scale > 1 && isMobile) ? 'opacity-0' : 'opacity-100'

    return (
        <div id="image-zoom" ref={containerRef}
            className='max-w-[80vw] max-h-[80vh] overflow-visible relative'
            style={{
                '--imgUrl': `url(${image})`,
                '--zoomX': `${zoom.x}%`,
                '--zoomY': `${zoom.y}%`,
                '--zoomDisplay': zoomDisplay,
                '--backgroundSize': backgroundSize, // For PC ::after
                '--zoomWidth': zoomWidth,           // For mobile ::before
                '--zoomHeight': zoomHeight,         // For mobile ::before
                touchAction: 'none'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomDisplay('none')}
        >

            <img src={image} {...props} alt="Tattoo image"
                className={` max-w-[80vw] max-h-[80vh] object-contain ${opacityClass}`} />
        </div>
    );

} 