import { useRef, useImperativeHandle, useContext } from 'react';
import { TattooContext } from '../store/TattooContext.jsx';
import ZoomImage from './ZoomImage.jsx';

export default function ImagePopUp({ image }) {

    const componentRef = useRef(null);
    const { modalRef } = useContext(TattooContext);

    useImperativeHandle(modalRef, () => ({

        open() {

            componentRef.current.showModal();

        },

        close() {

            componentRef.current.close();

        }

    }), []);


    const handleBackdropClick = (e) => {
        if (e.target === componentRef.current) {
            console.log("closing dialog")

            componentRef.current.close();
        }
    };

    return (

        <dialog ref={componentRef}
            onClick={handleBackdropClick}
            id='dialog'
            className={`backdrop:bg-black/80 backdrop:backdrop-blur-sm bg-transparent border-none outline-none p-4 m-auto`}
            style={{ touchAction: 'none' }}
        >


            <button
                onClick={() => componentRef.current.close()}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 transition-colors z-11 outline-0"
                aria-label="Close image"
            >
                ✕
            </button>
            <ZoomImage image={image} />

        </dialog>

    );


}