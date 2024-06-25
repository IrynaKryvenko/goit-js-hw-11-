// render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a');

export function clearGallery() {
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = '';
}

export function renderImages(images, galleryElement) {
  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageLink = document.createElement('a');
    imageLink.href = image.largeImageURL;
    imageLink.setAttribute('data-lightbox', 'gallery');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;

    imageLink.appendChild(img);
    card.appendChild(imageLink);

    galleryElement.appendChild(card);
  });

  gallery.refresh();
}
