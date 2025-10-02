import goldBackground from '../assets/goldBackground.jpg'

export default function Prize({ image, description, title, ...props }) {


    return <div className='relative p-6 rounded-sm shadow-2xl border-4 border-yellow-600 max-w-sm mx-auto transform md:hover:scale-105 transition-all duration-300'
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${goldBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} {...props}>
        {/* Ornate corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-700"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-700"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-700"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-700"></div>
        
        {/* Inner frame */}
        <div className="bg-white p-4 rounded shadow-inner border border-yellow-300">
            <img 
                src={image} 
                alt={description} 
                className="w-full h-auto rounded shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300" 
            />
        </div>
        
        {/* Premium plaque for text */}
        <div className="mt-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 p-0.5 rounded">
            <div className="bg-gradient-to-r from-amber-50 to-white p-3 rounded text-center">
                <h3 className="font-fancy font-bold text-lg text-amber-900 mb-1">{title}</h3>
                <p className="font-simple text-sm text-amber-800">{description}</p>
            </div>
        </div>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none"></div>
    </div>
}