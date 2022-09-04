import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContRef = document.querySelector('.gallery')


const createGalleryImgItem = ({preview,original,description}) => `<a class="gallery__item" href="${original}"}> 
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
const galleryMarkup = galleryItems.reduce((acc,item)=>acc + createGalleryImgItem(item),'');

galleryContRef.insertAdjacentHTML('afterbegin',galleryMarkup);


const sliderLightBox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 300,
});