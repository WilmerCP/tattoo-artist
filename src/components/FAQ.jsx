import PREGUNTAS from '../lib/faq.js';
import Pregunta from './Pregunta.jsx';

export default function FAQ() {

    return (

        <section className="bg-black  text-white flex flex-col md:flex-row gap-10 md:px-20 py-20 px-8">

            <div className="w-full md:w-1/2 md:px-8">
                <h2 className="md:text-6xl text-4xl md:text-start text-center font-fancy mb-10">Preguntas Frecuentes</h2>
                <p className="md:text-xl text-base font-simple">Aqui esta una lista de las preguntas más comunes que suelen tener mis clientes, no dudes contactarme para cualquier consulta adicional.</p>
            </div>

            <div className="w-full md:w-1/2 space-y-6 text-lg font-simple">
                {PREGUNTAS.map((item, index) => {

                    return <Pregunta key={index} pregunta={item.pregunta} respuesta={item.respuesta} />

                })}
            </div>

        </section>


    );

}