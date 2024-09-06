document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    function getRandomRecipe() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const recipe = data.meals[0];
                const recipeHTML = `
                    <h3>${recipe.strMeal}</h3>
                    <a href="${recipe.strSource || '#'}" target="_blank">
                        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" width="150">
                    </a>
                `;
                document.getElementById('randomRecipeContainer').innerHTML = recipeHTML;
            })
            .catch(error => {
                console.error('Error fetching random recipe:', error);
                document.getElementById('randomRecipeContainer').innerHTML = '<p>Failed to load recipe. Please try again.</p>';
            });
    }

    document.getElementById('randomRecipeButton').addEventListener('click', getRandomRecipe);
});




