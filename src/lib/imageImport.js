
async function importAll(group){

    const images = [];

    for (const path in group){

        const image = await group[path]();
        images.push(image);

    }

    return images;

}


const anime = import.meta.glob('../assets/anime/*.{jpg,JPG,png,PNG}', { import: 'default' });
const blackwork = import.meta.glob('../assets/blackwork/*.{jpg,JPG,png,PNG}', { import: 'default' });
const color = import.meta.glob('../assets/color/*.{jpg,JPG,png,PNG}', { import: 'default' });
const microrealismo = import.meta.glob('../assets/microrealismo/*.{jpg,JPG,png,PNG}', { import: 'default' });


export const animeImages = await importAll(anime);
export const blackworkImages = await importAll(blackwork);
export const colorImages = await importAll(color);
export const microrealismoImages = await importAll(microrealismo);