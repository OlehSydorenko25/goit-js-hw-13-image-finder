import './styles.css';
import murkupImg from './templates/img.hbs'
import searchImg from './js/fetchImg'



const mUpRef = document.querySelector('.list-img');
const sarchWord = 'смартфон';
const sarchPage = 3;
const key = '19673147-430400f08d3bcfd22f58b851f'


searchImg(sarchWord, sarchPage, key).then((data) => {
    const arrdata = data.hits;
    const markup = murkupImg(arrdata)
    mUpRef.insertAdjacentHTML('beforeend', markup)
})

