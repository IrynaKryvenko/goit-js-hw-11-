
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './pixabay-api';
import { renderImages, clearGallery } from './render-functions';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchInput = document.querySelector('input[name="searchQuery"]');
  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const images = await fetchImages(searchTerm);
    if (images.length === 0) {
      iziToast.warning({
        title: 'Warning',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(images, gallery);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
});

// Load more functionality
loadMoreBtn.addEventListener('click', function () {
  // Implement your load more functionality here
});
