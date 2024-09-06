document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('#foodGallery img');
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    function setRandomImages() {
        galleryImages.forEach((img, index) => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const recipe = data.meals[0];
                    img.src = recipe.strMealThumb;
                    img.alt = recipe.strMeal;
                })
                .catch(error => {
                    console.error('Error fetching gallery image:', error);
                });
        });
    }

    setRandomImages();

    setInterval(setRandomImages, 10000); // Change images every 10 seconds
});
