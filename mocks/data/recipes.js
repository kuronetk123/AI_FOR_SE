// Jest mock for recipes data module
// This file mocks the recipes array from data/recipes.js for unit testing

const { mockRecipes, mockDataHelpers } = require('../../test/mocks/mockData');

// Mock recipes array - starts with a copy of mock data
let mockRecipesData = [...mockRecipes];

// Mock the recipes array export
const recipes = mockRecipesData;

// Mock utility functions for test control
const mockUtils = {
    // Reset mock data to initial state
    resetMockData: () => {
        mockRecipesData = [...mockRecipes];
    },
    
    // Add test recipe
    addTestRecipe: (recipe) => {
        mockRecipesData.push(recipe);
    },
    
    // Remove test recipe
    removeTestRecipe: (id) => {
        const index = mockRecipesData.findIndex(recipe => recipe.id === parseInt(id));
        if (index !== -1) {
            mockRecipesData.splice(index, 1);
        }
    },
    
    // Get current mock data
    getMockData: () => [...mockRecipesData],
    
    // Set mock data
    setMockData: (data) => {
        mockRecipesData = [...data];
    },
    
    // Clear all mock data
    clearMockData: () => {
        mockRecipesData = [];
    },
    
    // Find recipe by ID
    findById: (id) => {
        return mockRecipesData.find(recipe => recipe.id === parseInt(id));
    },
    
    // Filter recipes by meal type
    filterByMealType: (mealType) => {
        return mockRecipesData.filter(recipe => recipe.mealType === mealType);
    },
    
    // Filter recipes by difficulty
    filterByDifficulty: (difficulty) => {
        return mockRecipesData.filter(recipe => recipe.difficulty === difficulty);
    },
    
    // Filter recipes by tags
    filterByTags: (tags) => {
        return mockRecipesData.filter(recipe => 
            tags.some(tag => recipe.tags.includes(tag))
        );
    },
    
    // Search recipes by name
    searchByName: (searchTerm) => {
        return mockRecipesData.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
};

// Enhanced mock features
const enhancedMocks = {
    // Mock with specific return values
    mockFindById: (id, returnValue) => {
        const originalFind = mockUtils.findById;
        mockUtils.findById = jest.fn((inputId) => {
            if (inputId === id) {
                return returnValue;
            }
            return originalFind(inputId);
        });
    },
    
    mockFilterByMealType: (mealType, returnValue) => {
        const originalFilter = mockUtils.filterByMealType;
        mockUtils.filterByMealType = jest.fn((inputMealType) => {
            if (inputMealType === mealType) {
                return returnValue;
            }
            return originalFilter(inputMealType);
        });
    },
    
    mockFilterByDifficulty: (difficulty, returnValue) => {
        const originalFilter = mockUtils.filterByDifficulty;
        mockUtils.filterByDifficulty = jest.fn((inputDifficulty) => {
            if (inputDifficulty === difficulty) {
                return returnValue;
            }
            return originalFilter(inputDifficulty);
        });
    },
    
    // Mock with errors
    mockWithError: (functionName, errorMessage = 'Mock error') => {
        const mockFunction = mockUtils[functionName];
        if (mockFunction) {
            mockFunction.mockImplementation(() => {
                throw new Error(errorMessage);
            });
        }
    },
    
    // Mock with async delay
    mockWithDelay: (functionName, delay = 100) => {
        const mockFunction = mockUtils[functionName];
        if (mockFunction) {
            const originalImplementation = mockFunction.getMockImplementation();
            mockFunction.mockImplementation(async (...args) => {
                await new Promise(resolve => setTimeout(resolve, delay));
                return originalImplementation ? originalImplementation(...args) : undefined;
            });
        }
    }
};

// Mock data generators for testing
const mockGenerators = {
    // Generate a new recipe with auto-incrementing ID
    generateRecipe: (overrides = {}) => {
        const newId = Math.max(...mockRecipesData.map(recipe => recipe.id), 0) + 1;
        return {
            id: newId,
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
            tags: ['test', 'generated'],
            ...overrides
        };
    },
    
    // Generate multiple recipes
    generateRecipes: (count, baseOverrides = {}) => {
        return Array(count).fill().map((_, index) => 
            mockGenerators.generateRecipe({
                name: `Generated Recipe ${index + 1}`,
                ...baseOverrides
            })
        );
    },
    
    // Generate edge case recipes
    generateEdgeCaseRecipes: () => ({
        emptyRecipe: {
            id: 999,
            name: '',
            description: '',
            image: '',
            prepTime: '',
            cookTime: '',
            totalTime: '',
            servings: 0,
            calories: 0,
            difficulty: '',
            mealType: '',
            nutrition: {
                protein: 0,
                carbs: 0,
                fat: 0,
                fiber: 0,
                sugar: 0
            },
            ingredients: [],
            instructions: [],
            tags: []
        },
        largeRecipe: {
            id: 998,
            name: 'Large Recipe with Many Ingredients',
            description: 'A recipe with many ingredients and instructions',
            image: '/images/large.jpg',
            prepTime: '60 minutes',
            cookTime: '120 minutes',
            totalTime: '180 minutes',
            servings: 10,
            calories: 1000,
            difficulty: 'Hard',
            mealType: 'Dinner',
            nutrition: {
                protein: 50,
                carbs: 100,
                fat: 30,
                fiber: 20,
                sugar: 15
            },
            ingredients: Array(20).fill().map((_, i) => ({
                name: `Ingredient ${i + 1}`,
                amount: `${i + 1} cups`
            })),
            instructions: Array(15).fill().map((_, i) => 
                `Step ${i + 1}: Do something with ingredient ${i + 1}`
            ),
            tags: ['large', 'complex', 'dinner', 'many-ingredients']
        }
    })
};

// Export all mock functions and utilities
module.exports = {
    // Main mock data
    recipes,
    
    // Mock utilities
    mockUtils,
    enhancedMocks,
    mockGenerators,
    
    // Mock data helpers
    mockDataHelpers
};