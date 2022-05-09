import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

const marKup = createItemsGallery(galleryItems);
ulEl.insertAdjacentHTML('beforeend', marKup);

function createItemsGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}"
            />
      </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  fadeSpeed: 250,
  overlayOpacity: 0.7,
  captionsData: 'alt',
});

lightbox.on();
