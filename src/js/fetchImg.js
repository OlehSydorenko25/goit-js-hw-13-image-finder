
export default function searchImg (sarchWord, sarchPage, key) {return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${sarchWord}&page=${sarchPage}&per_page=12&key=${key}`).then(res => res.json())}