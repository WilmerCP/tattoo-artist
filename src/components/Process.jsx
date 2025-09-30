import Step from "./Step.jsx"
import pasos from "../lib/pasos.js"

export default function Process() {

    return <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h2 className="md:text-4xl text-4xl font-fancy mb-16 text-center">El Proceso</h2>

        <div className="max-w-4xl w-full relative">
            {/* Mobile: Single Continuous Vertical Line */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px dotted-line transform -translate-x-1/2"></div>
            {pasos.map((item, index) => (
                <div key={index} className="relative">
                    {/* Step */}
                    <div className={`flex ${index % 2 === 0 ? 'md:justify-start justify-center' : 'md:justify-end justify-center'} mb-16`}>
                        <Step
                            number={index + 1}
                            title={item.titulo}
                            description={item.descripcion}
                            isRight={index % 2 !== 0}
                        />
                    </div>

                    {/* Desktop Only: Diagonal Lines */}
                    {index < pasos.length - 1 && (
                        <svg
                            className="hidden md:block absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-4"
                            width="500"
                            height="100"
                            viewBox="0 0 500 100"
                        >
                            <path
                                d={index % 2 === 0
                                    ? "M 250 0 Q 325 60 400 100" // Left to right - much longer
                                    : "M 250 0 Q 175 60 100 100" // Right to left - much longer
                                }
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4,4"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    </section>
}