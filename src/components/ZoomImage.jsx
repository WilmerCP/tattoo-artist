import { useState } from 'react';

export default function ZoomImage({ image, ...props }) {

    const [zoomDisplay,setZoomDisplay] = useState('none');
    const [zoom, setZoom] = useState({

        x: 0,
        y: 0

    });

    function handleMouseMove(e) {

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

    return (
        <div id="image-zoom" className='max-w-[80vw] max-h-[80vh] overflow-hidden relative'
            style={{
                '--imgUrl': `url(${image})`,
                '--zoomX': `${zoom.x}%`,
                '--zoomY': `${zoom.y}%`,
                '--zoomDisplay': zoomDisplay
            }} onMouseMove={handleMouseMove} onMouseLeave={() => setZoomDisplay('none')}>
            <img src={image} {...props} alt="Tattoo image"
                className='max-w-[80vw] max-h-[80vh] object-contain' />
        </div>
    );

} 