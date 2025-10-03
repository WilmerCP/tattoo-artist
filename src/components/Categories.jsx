
import categories from '../lib/categories.js';
import CategoryItem from './CategoryItem.jsx';



export default function Categories() {

    return (

        <div className='bg-black text-white pt-40 md:pb-20 pb-5 md:px-24 px-5 '>

            <h2 className="md:text-6xl text-5xl font-fancy mb-16 text-center">Estilos</h2>

            <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>

                {categories.map((category) => (
                    <CategoryItem key={category.id} name={category.name} img={category.img} />
                ))}

            </div>
        </div>


    );

}