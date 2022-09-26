import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector( '.gallery')

const galleryMarkup = createImageCardMarkup(galleryItems);


galleryContainer.insertAdjacentHTML( 'beforeend', galleryMarkup)
function createImageCardMarkup(galleryItems){
    return galleryItems.map(({preview, original, description }) => {
    return`<div class="gallery__item">
    <a class="gallery__link" 
    href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
   }).join(" ")  
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt"})
// const onGalleryContainerClick = (e) => {
//   e.preventDefault();
//   if (e.target === e.currentTarget) return;
//   const source = e.target.dataset.source;
//   const instance = basicLightbox.create(
//     `<div class="modal">
//       <img src="${source}" 
//       width="1100"
//       height="700">
//     </div>`
//   );
//   instance.show();
//   console.log(e.target);
// };