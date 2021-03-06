import './styles.css';
import murkupImg from './templates/img.hbs'
import searchImg from './js/apiService'
import * as basicLightbox from 'basiclightbox'
import { alert, defaultModules, error } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile';
defaultModules.set(PNotifyMobile, {});
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css'

const ref = {
    searchBnt: document.querySelector('.search-btn'),
    searchForm: document.querySelector('.search-form'),
    searchContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.btn-more'),

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

})

function fetchImg(inputValue) {
    searchImg(inputValue, searchPage).then((arrData) => {
        ref.loadMoreBtn.classList.add('is-hidden')
        markupImgDo(arrData)
        const lengthData = arrData.length;

        if (lengthData === 0) {
            alert('Such a image has not been found');
            return
        } else if (lengthData < 12) {
            return
        }

        ref.loadMoreBtn.classList.remove('is-hidden')
        
    }).catch(err => {
        console.log(err);
    })
}

function markupImgDo (arrData) {
    const markup = murkupImg(arrData)
    searchPage += 1
    ref.searchContainer.insertAdjacentHTML('beforeend', markup)
    
     window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

ref.searchContainer.addEventListener('click', (evt) => {
    if (evt.target.nodeName !== 'IMG') {
        return
    }
        const valueClick = evt.target.dataset.source
        const instance = basicLightbox.create(`<img src=${valueClick}  alt="">`).show()
   })




