import { useState, useEffect, useContext } from 'react';
import { animeImages, blackworkImages, microrealismoImages, colorImages } from '../lib/imageImport.js';
import { TattooContext } from '../store/TattooContext.jsx';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact.jsx';

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

const storeImages = (categories) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(categories));
  } catch {
    console.warn('Failed to store images in sessionStorage');
  }
};

const getActiveCategory = (myObject) => {
  const activeEntry = Object.entries(myObject).find(([key, value]) => value === true);
  return activeEntry ? activeEntry[0] : null; // Returns the key name or null
};



export default function Gallery() {

  const [loading, setLoading] = useState(true);
  const { handleImageClick } = useContext(TattooContext);
  const [selectedCategories, setSelectedCategories] = useState({
    anime: false,
    blackwork: false,
    microrealismo: false,
    color: false,
    todo: true
  });

  const cachedImages = getStoredImages();

  function selectCategory(category) {

    if (category === 'todo') {
      setSelectedCategories({
        anime: false,
        blackwork: false,
        microrealismo: false,
        color: false,
        todo: true
      });
    } else {

      setSelectedCategories({
        anime: category === 'anime',
        blackwork: category === 'blackwork',
        microrealismo: category === 'microrealismo',
        color: category === 'color',
      });

    }


  }

  useEffect(() => {

    window.scrollTo(0, 0);

    if (!cachedImages) {

      Promise.all(imagePromises).then((images) => {

        const categories = {
          anime: shuffleArray(images[0]),
          blackwork: shuffleArray(images[1]),
          microrealismo: shuffleArray(images[2]),
          color: shuffleArray(images[3]),
          todo: shuffleArray(images.flat())
        }

        storeImages(categories);
        setLoading(false);
      });

    } else {

      setLoading(false);

    }


  }, []);

  let content = <p className='text-2xl font-simple py-5 text-white text-center'>Las fotos estan cargando, espere un momento...</p>

  if (!loading) {

    const activeCategory = getActiveCategory(selectedCategories);

    const gallery = cachedImages[activeCategory]?.map((img, index) => {

      return <img src={img} key={img} className={"aspect-square object-cover cursor-pointer  hover:scale-105 transition-transform shadow-lg hover:shadow-xl border border-gray-700"} onClick={() => { handleImageClick(img) }}></img>

    });

    content = <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-6 md:py-10 py-8 md:w-[80%] mx-auto'>

      {gallery}

    </div>

  }

  const buttonClasses = 'bg-white md:text-xl text-black font-simple font-bold hover:bg-gray-200 transition md:p-3 p-2 text-base ';

  return (
    <>
      <div className='bg-black text-white min-h-screen justify-center px-10'
        style={{ touchAction: 'pan-y' }}>
        <Link to={'/tattoo-artist/'} className='font-fancy md:text-4xl text-3xl py-6 md:py-10 text-center block hover:scale-105 transition-transform'>Erian Canelón</Link>
        <h1 className='font-fancy md:text-6xl text-5xl md:py-10 py-6 text-center '>Galería</h1>

        <div className='flex flex-row gap-2 mx-auto justify-center flex-wrap md:mb-10 mb-6'>
          <button onClick={() => { selectCategory('color') }} className={`${buttonClasses} ${selectedCategories.color ? ' active' : ''}`}>Color</button>
          <button onClick={() => { selectCategory('anime') }} className={`${buttonClasses} ${selectedCategories.anime ? ' active' : ''}`}>Anime</button>
          <button onClick={() => { selectCategory('blackwork') }} className={`${buttonClasses} ${selectedCategories.blackwork ? ' active' : ''}`}>Blackwork</button>
          <button onClick={() => { selectCategory('microrealismo') }} className={`${buttonClasses} ${selectedCategories.microrealismo ? ' active' : ''}`}>Microrealismo</button>
          <button onClick={() => { selectCategory('todo') }} className={`${buttonClasses} ${selectedCategories.todo ? ' active' : ''}`}>Todo</button>
        </div>

        {content}
      </div>
      <Contact />
    </>
  )
}