export default function Contact() {

    const handleWhatsAppClick = () => {
        // Replace with your actual WhatsApp number (include country code without + or spaces)
        const phoneNumber = "584120187001"; // Change this to your WhatsApp number
        const message = "Hola Erian! Me interesa conocer más sobre tus servicios de tatuaje.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="bg-black text-white py-10 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-fancy text-4xl md:text-6xl mb-8">Contacto</h2>

                <div className="mb-12">
                    <p className="font-simple text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                        ¿Listo para hacer realidad tu próximo tatuaje? Contáctame para discutir tu idea y agendar una cita.
                    </p>
                </div>

                <div className="space-y-6 mb-12 hidden">
                    <div className="flex flex-row gap-8 justify-center items-start">
                        <div className="text-center">
                            <h3 className="font-simple font-bold text-xl mb-2">Ubicación</h3>
                            <p className="font-simple text-gray-300">Los Altos Mirandinos</p>
                            <p className="font-simple text-gray-300">Venezuela 📍</p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-simple font-bold text-xl mb-2">Instagram</h3>
                            <a
                                href="https://www.instagram.com/erian_canelon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-simple text-gray-300 hover:text-white transition-colors underline"
                            >
                                @erian_canelon
                            </a>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-simple font-bold py-4 px-8 transition-all duration-300 hover:scale-105 text-lg"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                    </svg>
                    Contactar por WhatsApp
                </button>

                <p className="font-simple text-sm text-gray-400 mt-6">
                    💡 Guarda mi número como "Erian Canelón - Tatuador" para que estemos en contacto
                    <br />
                    Respondo mensajes de lunes a viernes de 9:00 AM a 6:00 PM
                </p>
            </div>
        </section>
    )
}