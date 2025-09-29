import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.jsx"
import ImagePopUp from "../components/ImagePopup.jsx"
import {TattooContext} from "../store/TattooContext.jsx"
import { useContext } from 'react';

export default function RootLayout() {

    const { selectedImage, modalRef } = useContext(TattooContext);

    return (

        <>
            <ImagePopUp image={selectedImage} ref={modalRef}/>
            <Outlet />
            <Footer />
        </>

    )

}