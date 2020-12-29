import './styles.css';
import murkupImg from './templates/img.hbs'
import searchImg from './js/fetchImg'
import * as basicLightbox from 'basiclightbox'



const ref = {
    searchBnt: document.querySelector('.search-btn'),
    searchForm: document.querySelector('.search-form'),
    searchContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.btn-more'),
    selectedPicture: document.querySelector('.title-img'),

}
let searchPage = 1;
let inputValue = '';

ref.loadMoreBtn.addEventListener('click', () => {
    fetchImg(inputValue)
})

ref.searchForm.addEventListener('submit', evt => {
    evt.preventDefault()

    searchPage = 1;

    const form = evt.currentTarget
    inputValue = form.elements.query.value
    ref.searchContainer.innerHTML = ''
    if (!inputValue) {
        return
    }
       
    fetchImg(inputValue)

     window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
})

function fetchImg(inputValue) {
    searchImg(inputValue, searchPage).then((arrData) => markupImgDo(arrData)).catch(err => console.log(err))
    ref.loadMoreBtn.classList.remove('is-hidden')

     
}

function markupImgDo (arrData) {
    const markup = murkupImg(arrData)
    searchPage += 1
    ref.searchContainer.insertAdjacentHTML('beforeend', markup)
    
     
}

