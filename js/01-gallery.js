import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const divEl = document.querySelector('.gallery');

const marKup = createItemsGallery(galleryItems);
divEl.insertAdjacentHTML('beforeend', marKup);

function createItemsGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

divEl.addEventListener('click', onImgLink);
function onImgLink(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const bigImgLink = event.target.dataset.source;
  
  showBigImg(bigImgLink);
}

function showBigImg(link) {
  const instance = basicLightbox.create(`<img src ="${link}">`, {
    onShow: instance => {
      window.addEventListener('keydown', onEscPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscPress);
    },
  });
  instance.show();

  function onEscPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
  }
  console.log(instance);
}
