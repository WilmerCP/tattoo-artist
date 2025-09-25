import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";

export default function Pregunta({ pregunta, respuesta }) {

    const [isOpen, setIsOpen] = useState(false);

    const icon = isOpen ? <IoMdArrowDropup className="text-5xl"/> : <IoMdArrowDropdown className="text-5xl"/>;

    return (
        <div className="border-b border-gray-700 py-4">
            <div className="cursor-pointer text-xl mb-2 flex flex-nowrap gap-2 items-end justify-between" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="md:text-2xl text-xl font-semibold mb-2">{pregunta}</h3>
                {icon}
            </div>

            {isOpen && <p className="md:text-lg text-base">{respuesta}</p>}
        </div>
    )


}