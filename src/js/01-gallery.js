import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryItem = galleryItems
	.map(
		({ preview, original, description }) =>
			`<a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}"/>
            </a>`,
	)
	.join("");
const mainGallery = document.querySelector(".gallery");

mainGallery.insertAdjacentHTML("beforeend", galleryItem);

const lightbox = new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
});
console.log(galleryItems);
