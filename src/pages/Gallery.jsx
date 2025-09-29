import { useState, useEffect, useContext } from 'react';
import { animeImages, blackworkImages, microrealismoImages, colorImages } from '../lib/imageImport.js';
import { TattooContext } from '../store/TattooContext.jsx';
import { Link } from 'react-router-dom';

const imagePromises = [animeImages, blackworkImages, microrealismoImages, colorImages];
const CACHE_KEY = 'galleryImages';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getStoredImages = () => {
  try {
    const stored = sessionStorage.getItem(CACHE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const storeImages = (images) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(shuffleArray(images)));
  } catch {
    console.warn('Failed to store images in sessionStorage');
  }
};


export default function Gallery() {

  const [loading, setloading] = useState(true);
  const { handleImageClick } = useContext(TattooContext);

    const cachedImages = getStoredImages();

  useEffect(() => {

    window.scrollTo(0, 0);

    if (!cachedImages) {

      Promise.all(imagePromises).then((images) => {
        storeImages(images.flat());
        setloading(false);
      });

    }else{

      setloading(false);

    }


  }, []);

  let content = <p className='text-2xl font-simple py-5 text-white text-center'>Las fotos estan cargando, espere un momento...</p>

  if (!loading) {

    const gallery = cachedImages.map((img, index) => {

      return <img src={img} key={img} className={"aspect-square object-cover cursor-pointer  hover:scale-105 transition-transform shadow-lg hover:shadow-xl border border-gray-700"} onClick={() => { handleImageClick(img) }}></img>

    });

    content = <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 py-10 md:w-[80%] mx-auto'>

      {gallery}

    </div>

  }

  return (
    <div className='bg-black text-white min-h-screen justify-center px-10'>
      <Link to={'/tattoo-artist/'} className='font-fancy text-4xl py-10 text-center block hover:scale-105 transition-transform'>Erian Canelón</Link>
      <h1 className='font-fancy text-6xl py-10 text-center uppercase'>Mi trabajo</h1>

      {content}
    </div>
  )
}