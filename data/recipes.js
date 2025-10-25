// Sample recipes data
const recipes = [
    {
        id: 1,
        name: 'Grilled Chicken Salad',
        description: 'A healthy protein-packed salad with grilled chicken breast',
        image: '/images/grilled-chicken-salad.jpg',
        prepTime: '15 minutes',
        cookTime: '20 minutes',
        totalTime: '35 minutes',
        servings: 2,
        calories: 350,
        difficulty: 'Easy',
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
            { name: 'Cherry tomatoes', amount: '1 cup' },
            { name: 'Cucumber', amount: '1 medium' },
            { name: 'Olive oil', amount: '2 tbsp' },
            { name: 'Lemon juice', amount: '1 tbsp' },
            { name: 'Salt and pepper', amount: 'to taste' }
        ],
        steps: [
            { step: 1, description: 'Season chicken breast with salt and pepper' },
            { step: 2, description: 'Grill chicken for 8-10 minutes on each side until cooked through' },
            { step: 3, description: 'Let chicken rest for 5 minutes, then slice' },
            { step: 4, description: 'Combine greens, tomatoes, and cucumber in a large bowl' },
            { step: 5, description: 'Top with sliced chicken' },
            { step: 6, description: 'Drizzle with olive oil and lemon juice' }
        ],
        tags: ['Healthy', 'High Protein', 'Low Carb', 'Gluten Free']
    },
    {
        id: 2,
        name: 'Oatmeal with Berries',
        description: 'A nutritious breakfast packed with fiber and antioxidants',
        image: '/images/oatmeal-berries.jpg',
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
            { name: 'Water or milk', amount: '1 cup' },
            { name: 'Mixed berries', amount: '1/2 cup' },
            { name: 'Honey', amount: '1 tsp' },
            { name: 'Chia seeds', amount: '1 tbsp' },
            { name: 'Cinnamon', amount: '1/4 tsp' }
        ],
        steps: [
            { step: 1, description: 'Bring water or milk to a boil' },
            { step: 2, description: 'Add oats and reduce heat to simmer' },
            { step: 3, description: 'Cook for 5-7 minutes, stirring occasionally' },
            { step: 4, description: 'Remove from heat and let sit for 2 minutes' },
            { step: 5, description: 'Top with berries, honey, chia seeds, and cinnamon' }
        ],
        tags: ['Breakfast', 'High Fiber', 'Vegetarian', 'Heart Healthy']
    },
    {
        id: 3,
        name: 'Salmon with Roasted Vegetables',
        description: 'Omega-3 rich salmon with colorful roasted vegetables',
        image: '/images/salmon-veggies.jpg',
        prepTime: '10 minutes',
        cookTime: '25 minutes',
        totalTime: '35 minutes',
        servings: 2,
        calories: 450,
        difficulty: 'Medium',
        mealType: 'Dinner',
        nutrition: {
            protein: 40,
            carbs: 30,
            fat: 18,
            fiber: 7,
            sugar: 8
        },
        ingredients: [
            { name: 'Salmon fillets', amount: '2 pieces (150g each)' },
            { name: 'Broccoli', amount: '2 cups' },
            { name: 'Bell peppers', amount: '2 medium' },
            { name: 'Zucchini', amount: '1 medium' },
            { name: 'Olive oil', amount: '3 tbsp' },
            { name: 'Garlic', amount: '3 cloves' },
            { name: 'Lemon', amount: '1' },
            { name: 'Herbs (dill or parsley)', amount: '2 tbsp' }
        ],
        steps: [
            { step: 1, description: 'Preheat oven to 200°C (400°F)' },
            { step: 2, description: 'Cut vegetables into bite-sized pieces' },
            { step: 3, description: 'Toss vegetables with olive oil, garlic, salt, and pepper' },
            { step: 4, description: 'Spread vegetables on a baking sheet' },
            { step: 5, description: 'Place salmon on top of vegetables' },
            { step: 6, description: 'Drizzle salmon with olive oil and lemon juice' },
            { step: 7, description: 'Roast for 20-25 minutes until salmon is cooked through' },
            { step: 8, description: 'Garnish with fresh herbs and lemon wedges' }
        ],
        tags: ['Dinner', 'High Protein', 'Omega-3', 'Gluten Free', 'Paleo']
    },
    {
        id: 4,
        name: 'Quinoa Buddha Bowl',
        description: 'A complete vegetarian meal with quinoa, vegetables, and tahini sauce',
        image: '/images/quinoa-bowl.jpg',
        prepTime: '15 minutes',
        cookTime: '20 minutes',
        totalTime: '35 minutes',
        servings: 2,
        calories: 420,
        difficulty: 'Medium',
        mealType: 'Lunch',
        nutrition: {
            protein: 15,
            carbs: 55,
            fat: 16,
            fiber: 10,
            sugar: 6
        },
        ingredients: [
            { name: 'Quinoa', amount: '1 cup' },
            { name: 'Chickpeas', amount: '1 can (400g)' },
            { name: 'Sweet potato', amount: '1 large' },
            { name: 'Kale', amount: '2 cups' },
            { name: 'Avocado', amount: '1 medium' },
            { name: 'Tahini', amount: '3 tbsp' },
            { name: 'Lemon juice', amount: '2 tbsp' },
            { name: 'Cumin', amount: '1 tsp' }
        ],
        steps: [
            { step: 1, description: 'Cook quinoa according to package instructions' },
            { step: 2, description: 'Roast chickpeas and cubed sweet potato at 200°C for 20 minutes' },
            { step: 3, description: 'Massage kale with a little olive oil' },
            { step: 4, description: 'Mix tahini, lemon juice, and water to make dressing' },
            { step: 5, description: 'Arrange quinoa, roasted vegetables, and kale in bowls' },
            { step: 6, description: 'Top with avocado slices and drizzle with tahini dressing' }
        ],
        tags: ['Vegetarian', 'Vegan', 'High Fiber', 'Plant Based', 'Gluten Free']
    },
    {
        id: 5,
        name: 'Greek Yogurt Parfait',
        description: 'A quick and nutritious snack or breakfast option',
        image: '/images/yogurt-parfait.jpg',
        prepTime: '5 minutes',
        cookTime: '0 minutes',
        totalTime: '5 minutes',
        servings: 1,
        calories: 220,
        difficulty: 'Easy',
        mealType: 'Snack',
        nutrition: {
            protein: 18,
            carbs: 28,
            fat: 4,
            fiber: 4,
            sugar: 16
        },
        ingredients: [
            { name: 'Greek yogurt', amount: '1 cup' },
            { name: 'Granola', amount: '1/4 cup' },
            { name: 'Mixed berries', amount: '1/2 cup' },
            { name: 'Honey', amount: '1 tsp' },
            { name: 'Sliced almonds', amount: '1 tbsp' }
        ],
        steps: [
            { step: 1, description: 'Layer half of the yogurt in a glass or bowl' },
            { step: 2, description: 'Add half of the berries and granola' },
            { step: 3, description: 'Repeat layers with remaining ingredients' },
            { step: 4, description: 'Top with almonds and drizzle with honey' }
        ],
        tags: ['Snack', 'Breakfast', 'High Protein', 'Vegetarian', 'Quick']
    },
    {
        id: 6,
        name: 'Turkey Stir-Fry',
        description: 'A quick and healthy dinner with lean turkey and vegetables',
        image: '/images/turkey-stirfry.jpg',
        prepTime: '10 minutes',
        cookTime: '15 minutes',
        totalTime: '25 minutes',
        servings: 2,
        calories: 380,
        difficulty: 'Easy',
        mealType: 'Dinner',
        nutrition: {
            protein: 38,
            carbs: 32,
            fat: 10,
            fiber: 5,
            sugar: 8
        },
        ingredients: [
            { name: 'Ground turkey', amount: '300g' },
            { name: 'Mixed vegetables (peppers, snap peas, carrots)', amount: '3 cups' },
            { name: 'Garlic', amount: '3 cloves' },
            { name: 'Ginger', amount: '1 tbsp' },
            { name: 'Soy sauce', amount: '2 tbsp' },
            { name: 'Sesame oil', amount: '1 tsp' },
            { name: 'Brown rice', amount: '1 cup cooked' }
        ],
        steps: [
            { step: 1, description: 'Heat sesame oil in a large wok or pan' },
            { step: 2, description: 'Cook ground turkey until browned' },
            { step: 3, description: 'Add garlic and ginger, cook for 1 minute' },
            { step: 4, description: 'Add vegetables and stir-fry for 5-7 minutes' },
            { step: 5, description: 'Add soy sauce and cook for 2 more minutes' },
            { step: 6, description: 'Serve over brown rice' }
        ],
        tags: ['Dinner', 'High Protein', 'Quick', 'Asian Inspired']
    }
];

module.exports = recipes;

