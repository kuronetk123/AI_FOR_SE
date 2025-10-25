// Jest mock for mealplans data module
// This file mocks all functions from data/mealplans.js for unit testing

const { mockMealPlans, mockDataHelpers } = require('../../test/mocks/mockData');

// Mock meal plans array - starts with a copy of mock data
let mockMealPlansData = [...mockMealPlans];

// Mock all exported functions from data/mealplans.js
const getAllMealPlans = jest.fn(() => {
    return [...mockMealPlansData];
});

const getMealPlanById = jest.fn((id) => {
    const mealPlan = mockMealPlansData.find(plan => plan.id === parseInt(id));
    return mealPlan || null;
});

const getMealPlansByDate = jest.fn((date) => {
    return mockMealPlansData.filter(plan => plan.date === date);
});

const getMealPlansByUserId = jest.fn((userId) => {
    return mockMealPlansData.filter(plan => plan.userId === userId);
});

const createMealPlan = jest.fn((mealPlanData) => {
    // Generate new ID
    const newId = Math.max(...mockMealPlansData.map(plan => plan.id), 0) + 1;
    
    // Create new meal plan
    const newMealPlan = {
        id: newId,
        userId: mealPlanData.userId || 'defaultuser',
        date: mealPlanData.date || new Date().toISOString().split('T')[0],
        name: mealPlanData.name || 'New Meal Plan',
        meals: mealPlanData.meals || [],
        totalCalories: mealPlanData.totalCalories || 0,
        totalMacros: mealPlanData.totalMacros || { protein: 0, carbs: 0, fat: 0 },
        targetCalories: mealPlanData.targetCalories || 2000
    };
    
    // Add to mock data
    mockMealPlansData.push(newMealPlan);
    
    return newMealPlan;
});

const deleteMealPlan = jest.fn((id) => {
    const index = mockMealPlansData.findIndex(plan => plan.id === parseInt(id));
    if (index !== -1) {
        mockMealPlansData.splice(index, 1);
        return true;
    }
    return false;
});

// Mock utility functions for test control
const mockUtils = {
    // Reset mock data to initial state
    resetMockData: () => {
        mockMealPlansData = [...mockMealPlans];
    },
    
    // Add test meal plan
    addTestMealPlan: (mealPlan) => {
        mockMealPlansData.push(mealPlan);
    },
    
    // Remove test meal plan
    removeTestMealPlan: (id) => {
        const index = mockMealPlansData.findIndex(plan => plan.id === parseInt(id));
        if (index !== -1) {
            mockMealPlansData.splice(index, 1);
        }
    },
    
    // Get current mock data
    getMockData: () => [...mockMealPlansData],
    
    // Set mock data
    setMockData: (data) => {
        mockMealPlansData = [...data];
    },
    
    // Clear all mock data
    clearMockData: () => {
        mockMealPlansData = [];
    }
};

// Mock implementation with enhanced features
const enhancedMocks = {
    // Mock with specific return values
    mockGetAllMealPlans: (returnValue) => {
        getAllMealPlans.mockReturnValue(returnValue);
    },
    
    mockGetMealPlanById: (id, returnValue) => {
        getMealPlanById.mockImplementation((inputId) => {
            if (inputId === id) {
                return returnValue;
            }
            return mockMealPlansData.find(plan => plan.id === parseInt(inputId)) || null;
        });
    },
    
    mockGetMealPlansByDate: (date, returnValue) => {
        getMealPlansByDate.mockImplementation((inputDate) => {
            if (inputDate === date) {
                return returnValue;
            }
            return mockMealPlansData.filter(plan => plan.date === inputDate);
        });
    },
    
    mockGetMealPlansByUserId: (userId, returnValue) => {
        getMealPlansByUserId.mockImplementation((inputUserId) => {
            if (inputUserId === userId) {
                return returnValue;
            }
            return mockMealPlansData.filter(plan => plan.userId === inputUserId);
        });
    },
    
    mockCreateMealPlan: (returnValue) => {
        createMealPlan.mockReturnValue(returnValue);
    },
    
    mockDeleteMealPlan: (id, returnValue) => {
        deleteMealPlan.mockImplementation((inputId) => {
            if (inputId === id) {
                return returnValue;
            }
            const index = mockMealPlansData.findIndex(plan => plan.id === parseInt(inputId));
            return index !== -1;
        });
    },
    
    // Mock with errors
    mockWithError: (functionName, errorMessage = 'Mock error') => {
        const mockFunction = {
            getAllMealPlans,
            getMealPlanById,
            getMealPlansByDate,
            getMealPlansByUserId,
            createMealPlan,
            deleteMealPlan
        }[functionName];
        
        if (mockFunction) {
            mockFunction.mockImplementation(() => {
                throw new Error(errorMessage);
            });
        }
    },
    
    // Mock with async delay
    mockWithDelay: (functionName, delay = 100) => {
        const mockFunction = {
            getAllMealPlans,
            getMealPlanById,
            getMealPlansByDate,
            getMealPlansByUserId,
            createMealPlan,
            deleteMealPlan
        }[functionName];
        
        if (mockFunction) {
            const originalImplementation = mockFunction.getMockImplementation();
            mockFunction.mockImplementation(async (...args) => {
                await new Promise(resolve => setTimeout(resolve, delay));
                return originalImplementation ? originalImplementation(...args) : undefined;
            });
        }
    }
};

// Export all mock functions and utilities
module.exports = {
    // Main mock functions
    getAllMealPlans,
    getMealPlanById,
    getMealPlansByDate,
    getMealPlansByUserId,
    createMealPlan,
    deleteMealPlan,
    
    // Mock utilities
    mockUtils,
    enhancedMocks,
    
    // Mock data helpers
    mockDataHelpers
};