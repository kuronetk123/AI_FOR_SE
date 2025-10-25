// Sample meal plans data
// In a real application, this would be stored in a database
const mealPlans = [
    {
        id: 1,
        userId: 'user1',
        date: '2025-10-25',
        name: 'Balanced Daily Plan',
        meals: [
            {
                type: 'Breakfast',
                recipeId: 2,
                name: 'Oatmeal with Berries',
                calories: 280,
                macros: {
                    protein: 10,
                    carbs: 45,
                    fat: 6
                }
            },
            {
                type: 'Lunch',
                recipeId: 1,
                name: 'Grilled Chicken Salad',
                calories: 350,
                macros: {
                    protein: 35,
                    carbs: 25,
                    fat: 12
                }
            },
            {
                type: 'Snack',
                recipeId: 5,
                name: 'Greek Yogurt Parfait',
                calories: 220,
                macros: {
                    protein: 18,
                    carbs: 28,
                    fat: 4
                }
            },
            {
                type: 'Dinner',
                recipeId: 3,
                name: 'Salmon with Roasted Vegetables',
                calories: 450,
                macros: {
                    protein: 40,
                    carbs: 30,
                    fat: 18
                }
            }
        ],
        totalCalories: 1300,
        totalMacros: {
            protein: 103,
            carbs: 128,
            fat: 40
        },
        targetCalories: 2000
    },
    {
        id: 2,
        userId: 'user1',
        date: '2025-10-26',
        name: 'High Protein Plan',
        meals: [
            {
                type: 'Breakfast',
                recipeId: 5,
                name: 'Greek Yogurt Parfait',
                calories: 220,
                macros: {
                    protein: 18,
                    carbs: 28,
                    fat: 4
                }
            },
            {
                type: 'Lunch',
                recipeId: 4,
                name: 'Quinoa Buddha Bowl',
                calories: 420,
                macros: {
                    protein: 15,
                    carbs: 55,
                    fat: 16
                }
            },
            {
                type: 'Snack',
                recipeId: 5,
                name: 'Greek Yogurt Parfait',
                calories: 220,
                macros: {
                    protein: 18,
                    carbs: 28,
                    fat: 4
                }
            },
            {
                type: 'Dinner',
                recipeId: 6,
                name: 'Turkey Stir-Fry',
                calories: 380,
                macros: {
                    protein: 38,
                    carbs: 32,
                    fat: 10
                }
            }
        ],
        totalCalories: 1240,
        totalMacros: {
            protein: 89,
            carbs: 143,
            fat: 34
        },
        targetCalories: 2000
    },
    {
        id: 3,
        userId: 'user1',
        date: '2025-10-27',
        name: 'Vegetarian Plan',
        meals: [
            {
                type: 'Breakfast',
                recipeId: 2,
                name: 'Oatmeal with Berries',
                calories: 280,
                macros: {
                    protein: 10,
                    carbs: 45,
                    fat: 6
                }
            },
            {
                type: 'Lunch',
                recipeId: 4,
                name: 'Quinoa Buddha Bowl',
                calories: 420,
                macros: {
                    protein: 15,
                    carbs: 55,
                    fat: 16
                }
            },
            {
                type: 'Snack',
                recipeId: 5,
                name: 'Greek Yogurt Parfait',
                calories: 220,
                macros: {
                    protein: 18,
                    carbs: 28,
                    fat: 4
                }
            },
            {
                type: 'Dinner',
                recipeId: 4,
                name: 'Quinoa Buddha Bowl',
                calories: 420,
                macros: {
                    protein: 15,
                    carbs: 55,
                    fat: 16
                }
            }
        ],
        totalCalories: 1340,
        totalMacros: {
            protein: 58,
            carbs: 183,
            fat: 42
        },
        targetCalories: 2000
    }
];

// Helper functions
function getAllMealPlans() {
    return mealPlans;
}

function getMealPlanById(id) {
    return mealPlans.find(plan => plan.id === parseInt(id));
}

function getMealPlansByDate(date) {
    return mealPlans.filter(plan => plan.date === date);
}

function getMealPlansByUserId(userId) {
    return mealPlans.filter(plan => plan.userId === userId);
}

function createMealPlan(mealPlanData) {
    const newId = Math.max(...mealPlans.map(p => p.id), 0) + 1;
    const newMealPlan = {
        id: newId,
        ...mealPlanData
    };
    mealPlans.push(newMealPlan);
    return newMealPlan;
}

function deleteMealPlan(id) {
    const index = mealPlans.findIndex(plan => plan.id === parseInt(id));
    if (index !== -1) {
        mealPlans.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    getAllMealPlans,
    getMealPlanById,
    getMealPlansByDate,
    getMealPlansByUserId,
    createMealPlan,
    deleteMealPlan
};

