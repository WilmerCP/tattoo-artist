export default function Step({ number, title, description, isRight = false }) {
    return (
        <div className={`flex items-center gap-6 max-w-lg ${isRight ? 'md:flex-row-reverse md:text-right flex-row text-left' : 'flex-row text-left'}`}>
            {/* Step Number Circle */}
            <div className="flex-shrink-0 md:w-16 md:h-16 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl">
                {number}
            </div>
            
            {/* Step Content */}
            <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-fancy mb-2">{title}</h3>
                <p className="text-gray-300 font-simple text-sm md:text-base">{description}</p>
            </div>
        </div>
    )
}