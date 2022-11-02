import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs ={
    list : document.querySelector('.gallery')
}


function makeListItem({preview,original,description}={}) {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}

function makeArrayItems() {
    return galleryItems.map(item =>makeListItem(item)).join('')
}
refs.list.insertAdjacentHTML('afterbegin',makeArrayItems());


    // e.preventDefault();

    // const galleryTarget = e.target.classList.contains("gallery__image")
    // if(!galleryItems){
    //     return;
    // }

    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
	    captionDelay: 300,
     });
