import Hero from "../components/Hero.jsx"
import Process from "../components/Process.jsx"
import FAQ from "../components/FAQ.jsx"
import Carrousel from "../components/Carrousel.jsx"
import AboutMe from "../components/AboutMe.jsx"
import { useEffect } from "react"
import Contact from "../components/Contact.jsx"

function App() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Hero />
            <Carrousel />
            <AboutMe />
            <Process />
            <FAQ />
            <Contact />
        </>

    )
}

export default App
