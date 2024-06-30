const ingredients = [
    'Chicken', 'Beef', 'Pork', 'Carrot', 'Potato', 'Onion', 'Garlic', 'Tomato', 'Rice', 'Pasta'
];

const recipes = [
    {
        name: 'Chicken Curry',
        ingredients: ['Chicken', 'Onion', 'Garlic', 'Tomato'],
        image: 'https://example.com/chicken-curry.jpg',
        procedure: 'Mix all ingredients and cook for 30 minutes.'
    },
    {
        name: 'Beef Stew',
        ingredients: ['Beef', 'Carrot', 'Potato', 'Onion'],
        image: 'https://example.com/beef-stew.jpg',
        procedure: 'Combine all ingredients and simmer for 2 hours.'
    },
    {
        name: 'Garlic Pasta',
        ingredients: ['Pasta', 'Garlic', 'Tomato'],
        image: 'https://example.com/garlic-pasta.jpg',
        procedure: 'Boil pasta and sauté with garlic and tomato.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const ingredientsList = document.getElementById('ingredients');
    const recipesList = document.getElementById('recipes');
    const findRecipesButton = document.getElementById('find-recipes');

    // Populate ingredients list
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = ingredient;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(ingredient));
        ingredientsList.appendChild(li);
    });

    // Find recipes based on selected ingredients
    findRecipesButton.addEventListener('click', () => {
        const selectedIngredients = Array.from(document.querySelectorAll('#ingredients input:checked'))
            .map(checkbox => checkbox.value);
        
        const matchedRecipes = recipes.filter(recipe => 
            recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient))
        );

        displayRecipes(matchedRecipes);
    });

    // Display recipes
    function displayRecipes(recipes) {
        recipesList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe';

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeDiv.appendChild(recipeImage);

            const recipeName = document.createElement('h3');
            recipeName.textContent = recipe.name;
            recipeDiv.appendChild(recipeName);

            const recipeIngredients = document.createElement('p');
            recipeIngredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
            recipeDiv.appendChild(recipeIngredients);

            const recipeProcedure = document.createElement('p');
            recipeProcedure.textContent = `Procedure: ${recipe.procedure}`;
            recipeDiv.appendChild(recipeProcedure);

            recipesList.appendChild(recipeDiv);
        });
    }
});
