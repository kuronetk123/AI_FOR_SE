// Mock data fixtures for testing
// This file contains reusable test data and helper functions

// Sample mock meal plans
const mockMealPlans = [
    {
        id: 1,
        userId: 'user1',
        date: '2025-10-25',
        name: 'Balanced Daily Plan',
        meals: [
            {
                type: 'Breakfast',
                recipeId: 1,
                name: 'Oatmeal with Berries',
                calories: 280,
                macros: { protein: 10, carbs: 45, fat: 6 }
            },
            {
                type: 'Lunch',
                recipeId: 2,
                name: 'Grilled Chicken Salad',
                calories: 350,
                macros: { protein: 35, carbs: 25, fat: 12 }
            }
        ],
        totalCalories: 630,
        totalMacros: { protein: 45, carbs: 70, fat: 18 },
        targetCalories: 2000
    },
    {
        id: 2,
        userId: 'user2',
        date: '2025-10-26',
        name: 'Keto Plan',
        meals: [
            {
                type: 'Breakfast',
                recipeId: 3,
                name: 'Avocado Toast',
                calories: 320,
                macros: { protein: 12, carbs: 15, fat: 25 }
            }
        ],
        totalCalories: 320,
        totalMacros: { protein: 12, carbs: 15, fat: 25 },
        targetCalories: 1800
    },
    {
        id: 3,
        userId: 'user1',
        date: '2025-10-27',
        name: 'Vegetarian Plan',
        meals: [
            {
                type: 'Dinner',
                recipeId: 4,
                name: 'Veggie Bowl',
                calories: 400,
                macros: { protein: 20, carbs: 50, fat: 15 }
            }
        ],
        totalCalories: 400,
        totalMacros: { protein: 20, carbs: 50, fat: 15 },
        targetCalories: 2200
    }
];

// Sample mock recipes
const mockRecipes = [
    {
        id: 1,
        name: 'Oatmeal with Berries',
        description: 'A healthy breakfast option',
        image: '/images/oatmeal.jpg',
        prepTime: '5 minutes',
        cookTime: '10 minutes',
        totalTime: '15 minutes',
        servings: 1,
        calories: 280,
        difficulty: 'Easy',
        mealType: 'Breakfast',
        nutrition: {
            protein: 10,
            carbs: 45,
            fat: 6,
            fiber: 8,
            sugar: 12
        },
        ingredients: [
            { name: 'Rolled oats', amount: '1/2 cup' },
            { name: 'Mixed berries', amount: '1/2 cup' },
            { name: 'Almond milk', amount: '1 cup' }
        ],
        instructions: [
            'Combine oats and almond milk in a bowl',
            'Microwave for 2 minutes',
            'Top with berries and serve'
        ],
        tags: ['healthy', 'quick', 'breakfast']
    },
    {
        id: 2,
        name: 'Grilled Chicken Salad',
        description: 'A protein-packed lunch option',
        image: '/images/chicken-salad.jpg',
        prepTime: '15 minutes',
        cookTime: '20 minutes',
        totalTime: '35 minutes',
        servings: 2,
        calories: 350,
        difficulty: 'Medium',
        mealType: 'Lunch',
        nutrition: {
            protein: 35,
            carbs: 25,
            fat: 12,
            fiber: 6,
            sugar: 4
        },
        ingredients: [
            { name: 'Chicken breast', amount: '200g' },
            { name: 'Mixed greens', amount: '2 cups' },
            { name: 'Cherry tomatoes', amount: '1 cup' }
        ],
        instructions: [
            'Season and grill chicken breast',
            'Prepare mixed greens and vegetables',
            'Slice chicken and serve over salad'
        ],
        tags: ['protein', 'healthy', 'lunch']
    },
    {
        id: 3,
        name: 'Avocado Toast',
        description: 'A simple and nutritious breakfast',
        image: '/images/avocado-toast.jpg',
        prepTime: '5 minutes',
        cookTime: '5 minutes',
        totalTime: '10 minutes',
        servings: 1,
        calories: 320,
        difficulty: 'Easy',
        mealType: 'Breakfast',
        nutrition: {
            protein: 12,
            carbs: 15,
            fat: 25,
            fiber: 10,
            sugar: 2
        },
        ingredients: [
            { name: 'Whole grain bread', amount: '2 slices' },
            { name: 'Avocado', amount: '1 medium' },
            { name: 'Lemon juice', amount: '1 tsp' }
        ],
        instructions: [
            'Toast the bread slices',
            'Mash avocado with lemon juice',
            'Spread on toast and serve'
        ],
        tags: ['healthy', 'quick', 'breakfast', 'vegetarian']
    },
    {
        id: 4,
        name: 'Veggie Bowl',
        description: 'A colorful and nutritious dinner',
        image: '/images/veggie-bowl.jpg',
        prepTime: '20 minutes',
        cookTime: '25 minutes',
        totalTime: '45 minutes',
        servings: 2,
        calories: 400,
        difficulty: 'Medium',
        mealType: 'Dinner',
        nutrition: {
            protein: 20,
            carbs: 50,
            fat: 15,
            fiber: 12,
            sugar: 8
        },
        ingredients: [
            { name: 'Quinoa', amount: '1 cup' },
            { name: 'Roasted vegetables', amount: '2 cups' },
            { name: 'Chickpeas', amount: '1/2 cup' }
        ],
        instructions: [
            'Cook quinoa according to package directions',
            'Roast vegetables in the oven',
            'Combine all ingredients in bowls'
        ],
        tags: ['vegetarian', 'healthy', 'dinner', 'complete-meal']
    }
];

// Helper functions for generating test data
const mockDataHelpers = {
    // Generate a new meal plan with auto-incrementing ID
    generateMealPlan: (overrides = {}) => {
        const baseMealPlan = {
            id: mockMealPlans.length + 1,
            userId: 'testuser',
            date: '2025-10-30',
            name: 'Generated Test Plan',
            meals: [
                {
                    type: 'Breakfast',
                    recipeId: 1,
                    name: 'Generated Meal',
                    calories: 300,
                    macros: { protein: 15, carbs: 30, fat: 10 }
                }
            ],
            totalCalories: 300,
            totalMacros: { protein: 15, carbs: 30, fat: 10 },
            targetCalories: 2000
        };
        return { ...baseMealPlan, ...overrides };
    },

    // Generate a new recipe with auto-incrementing ID
    generateRecipe: (overrides = {}) => {
        const baseRecipe = {
            id: mockRecipes.length + 1,
            name: 'Generated Test Recipe',
            description: 'A generated test recipe',
            image: '/images/generated.jpg',
            prepTime: '10 minutes',
            cookTime: '15 minutes',
            totalTime: '25 minutes',
            servings: 2,
            calories: 250,
            difficulty: 'Easy',
            mealType: 'Lunch',
            nutrition: {
                protein: 20,
                carbs: 25,
                fat: 8,
                fiber: 5,
                sugar: 6
            },
            ingredients: [
                { name: 'Test ingredient', amount: '1 cup' }
            ],
            instructions: [
                'Test instruction step 1',
                'Test instruction step 2'
            ],
            tags: ['test', 'generated']
        };
        return { ...baseRecipe, ...overrides };
    },

    // Get meal plans by user ID
    getMealPlansByUserId: (userId) => {
        return mockMealPlans.filter(plan => plan.userId === userId);
    },

    // Get meal plans by date
    getMealPlansByDate: (date) => {
        return mockMealPlans.filter(plan => plan.date === date);
    },

    // Get meal plan by ID
    getMealPlanById: (id) => {
        return mockMealPlans.find(plan => plan.id === parseInt(id));
    },

    // Get recipes by meal type
    getRecipesByMealType: (mealType) => {
        return mockRecipes.filter(recipe => recipe.mealType === mealType);
    },

    // Get recipes by difficulty
    getRecipesByDifficulty: (difficulty) => {
        return mockRecipes.filter(recipe => recipe.difficulty === difficulty);
    },

    // Get recipe by ID
    getRecipeById: (id) => {
        return mockRecipes.find(recipe => recipe.id === parseInt(id));
    },

    // Reset mock data (useful for test cleanup)
    resetMockData: () => {
        // This would reset any modified mock data
        // In a real implementation, you might want to restore original arrays
        return {
            mealPlans: [...mockMealPlans],
            recipes: [...mockRecipes]
        };
    },

    // Create edge case data
    createEdgeCaseData: () => ({
        emptyMealPlan: {
            id: 999,
            userId: 'edgeuser',
            date: '2025-12-31',
            name: 'Empty Plan',
            meals: [],
            totalCalories: 0,
            totalMacros: { protein: 0, carbs: 0, fat: 0 },
            targetCalories: 2000
        },
        largeMealPlan: {
            id: 998,
            userId: 'edgeuser',
            date: '2025-12-30',
            name: 'Large Plan',
            meals: Array(10).fill().map((_, i) => ({
                type: 'Meal',
                recipeId: i + 1,
                name: `Large Meal ${i + 1}`,
                calories: 500,
                macros: { protein: 25, carbs: 50, fat: 20 }
            })),
            totalCalories: 5000,
            totalMacros: { protein: 250, carbs: 500, fat: 200 },
            targetCalories: 2000
        },
        invalidMealPlan: {
            id: null,
            userId: null,
            date: null,
            name: null,
            meals: null,
            totalCalories: null,
            totalMacros: null,
            targetCalories: null
        }
    })
};

module.exports = {
    mockMealPlans,
    mockRecipes,
    mockDataHelpers
};