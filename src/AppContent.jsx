import Hero from "./components/Hero"
import Process from "./components/Process"
import FAQ from "./components/FAQ"
import Carrousel from "./components/Carrousel"
import Footer from "./components/Footer"
import ImagePopUp from "./components/ImagePopup.jsx"
import {TattooContext} from "./store/TattooContext.jsx"

import { useContext } from 'react';

function App() {

    const { selectedImage, modalRef } = useContext(TattooContext);

    return (

        <>
            <ImagePopUp image={selectedImage} ref={modalRef}/>
            <Hero />
            <Carrousel />
            <Process />
            <FAQ />
            <Footer />
        </>

    )
}

export default App
