import { createContext, useState, useRef } from 'react';

export const TattooContext = createContext({

    selectedImage: null,
    handleImageClick: () => { },
    modalRef: null

});

export function TattooContextProvider({ children }) {

    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);

    function handleImageClick(image) {

        setSelectedImage(image);
        modalRef.current.open();
        console.log("hola")

    }

    return (

        <TattooContext.Provider value={{

            selectedImage,
            handleImageClick,
            modalRef,

        }}>

            {children}

        </TattooContext.Provider>


    );


}