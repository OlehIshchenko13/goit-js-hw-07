import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
gallery: document.querySelector('.gallery')
}
const makeItem=({preview,original,description})=>`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
function makeArrayItem() {
    
   return galleryItems.map(item =>makeItem(item)).join('')
   
}
refs.gallery.insertAdjacentHTML('afterbegin',makeArrayItem())





refs.gallery.addEventListener('click',onGalleryClick)

function onGalleryClick(e) {
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





