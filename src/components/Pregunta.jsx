import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Pregunta({ pregunta, respuesta }) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="border-b border-gray-700 py-4">
            <div className="cursor-pointer text-xl mb-2 flex flex-nowrap gap-2 items-end justify-between" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="md:text-2xl text-xl font-semibold mb-2">{pregunta}</h3>
                <span className={`inline-block w-[40px] h-[40px] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
                    <IoMdArrowDropdown
                        style={{ fontSize: '40px' }}
                    />
                </span>
            </div>

            {isOpen && <p className="md:text-lg text-base">{respuesta}</p>}
        </div>
    )


}