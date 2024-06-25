
const apiKey = '36655990-0724db180fb71d9be8c2c1bf3'; 
const baseUrl = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
