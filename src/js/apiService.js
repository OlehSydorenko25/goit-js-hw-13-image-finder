const key = '19673147-430400f08d3bcfd22f58b851f'

export default function searchImg(searchWord, searchPage) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchWord}&page=${searchPage}&per_page=12&key=${key}`).then(res => {
    if (res.ok) {
  return res.json();      
}
throw new Error('Error fetching data');
}).then(data => data.hits)}