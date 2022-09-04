import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContRef = document.querySelector('.gallery')


const createGalleryImgItem = ({preview,original,description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
const galleryMarkup = galleryItems.reduce((acc,item)=>acc + createGalleryImgItem(item),'');

galleryContRef.insertAdjacentHTML('afterbegin',galleryMarkup);




galleryContRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
	e.preventDefault();
 const galleryTarget = e.target.classList.contains("gallery__image")
	if (!galleryTarget) {
		return;
	}

	addOriginalImgToModal(e.target.dataset.source);
}

function addOriginalImgToModal(originalImageLink) {
	const instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="900" height="700">
`)

	instance.show();

	closeKeybord(instance);

}

function closeKeybord(instance) {
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape") {
			instance.close()
		}
	}, { once: true });
}


