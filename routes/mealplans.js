// Express routes for meal plans
const express = require('express');
const router = express.Router();
const recipes = require('../data/recipes');
const {
    getAllMealPlans,
    getMealPlanById,
    getMealPlansByDate,
    createMealPlan,
    deleteMealPlan
} = require('../data/mealplans');

// GET /mealplans - List all meal plans
router.get('/', (req, res) => {
    const { date } = req.query;
    
    let mealPlans;
    if (date) {
        mealPlans = getMealPlansByDate(date);
    } else {
        mealPlans = getAllMealPlans();
    }
    
    res.render('mealPlanList', {
        title: 'Meal Plans',
        mealPlans: mealPlans,
        selectedDate: date || ''
    });
});

// GET /mealplans/new - Show form to create a new meal plan
router.get('/new', (req, res) => {
    res.render('mealPlanCreate', {
        title: 'Create Meal Plan',
        recipes: recipes,
        mealTypes: ['Breakfast', 'Lunch', 'Snack', 'Dinner']
    });
});

// POST /mealplans - Create a new meal plan
router.post('/', (req, res) => {
    const { date, name, userId, meals } = req.body;
    
    // Validation
    if (!date || !name || !meals || meals.length === 0) {
        return res.status(400).render('error', {
            title: 'Invalid Data',
            message: 'Please provide date, name, and at least one meal.'
        });
    }
    
    // Process meals data
    const processedMeals = [];
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    
    // Parse meals if it comes as form data
    if (typeof meals === 'string') {
        try {
            const mealsArray = JSON.parse(meals);
            
            mealsArray.forEach(meal => {
                const recipe = recipes.find(r => r.id === parseInt(meal.recipeId));
                if (recipe) {
                    const mealData = {
                        type: meal.type,
                        recipeId: recipe.id,
                        name: recipe.name,
                        calories: recipe.calories,
                        macros: {
                            protein: recipe.nutrition.protein,
                            carbs: recipe.nutrition.carbs,
                            fat: recipe.nutrition.fat
                        }
                    };
                    processedMeals.push(mealData);
                    totalCalories += recipe.calories;
                    totalProtein += recipe.nutrition.protein;
                    totalCarbs += recipe.nutrition.carbs;
                    totalFat += recipe.nutrition.fat;
                }
            });
        } catch (error) {
            return res.status(400).render('error', {
                title: 'Invalid Data',
                message: 'Invalid meal data format.'
            });
        }
    }
    
    const mealPlanData = {
        userId: userId || 'user1',
        date: date,
        name: name,
        meals: processedMeals,
        totalCalories: totalCalories,
        totalMacros: {
            protein: totalProtein,
            carbs: totalCarbs,
            fat: totalFat
        },
        targetCalories: 2000
    };
    
    const newMealPlan = createMealPlan(mealPlanData);
    res.redirect(`/mealplans/${newMealPlan.id}`);
});

// GET /mealplans/:id - View a specific meal plan
router.get('/:id', (req, res) => {
    const mealPlanId = parseInt(req.params.id);
    const mealPlan = getMealPlanById(mealPlanId);
    
    if (!mealPlan) {
        return res.status(404).render('error', {
            title: 'Meal Plan Not Found',
            message: `Meal plan with ID ${mealPlanId} not found.`
        });
    }
    
    // Get full recipe details for each meal
    const mealsWithDetails = mealPlan.meals.map(meal => {
        const recipe = recipes.find(r => r.id === meal.recipeId);
        return {
            ...meal,
            recipeDetails: recipe
        };
    });
    
    res.render('mealPlanDetail', {
        title: mealPlan.name,
        mealPlan: {
            ...mealPlan,
            meals: mealsWithDetails
        }
    });
});

// POST /mealplans/:id/delete - Delete a meal plan
router.post('/:id/delete', (req, res) => {
    const mealPlanId = parseInt(req.params.id);
    const success = deleteMealPlan(mealPlanId);
    
    if (!success) {
        return res.status(404).render('error', {
            title: 'Meal Plan Not Found',
            message: `Meal plan with ID ${mealPlanId} not found.`
        });
    }
    
    res.redirect('/mealplans');
});

module.exports = router;

