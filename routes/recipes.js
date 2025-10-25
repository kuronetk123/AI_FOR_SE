// Express routes for recipes
const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes');

// GET /recipes - List all recipes
router.get('/', (req, res) => {
    const { mealType, difficulty } = req.query;
    
    let filteredRecipes = recipes;
    
    // Filter by meal type if provided
    if (mealType) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.mealType.toLowerCase() === mealType.toLowerCase()
        );
    }
    
    // Filter by difficulty if provided
    if (difficulty) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
        );
    }
    
    res.render('recipeList', { 
        title: 'Recipes',
        recipes: filteredRecipes,
        selectedMealType: mealType || '',
        selectedDifficulty: difficulty || ''
    });
});

// GET /recipes/:id - Get a specific recipe
router.get('/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        return res.status(404).render('error', {
            title: 'Recipe Not Found',
            message: `Recipe with ID ${recipeId} not found.`
        });
    }
    
    res.render('recipeDetail', {
        title: recipe.name,
        recipe: recipe
    });
});

module.exports = router;

