# 🍽️ Meal Planning App

A comprehensive meal planning application built with Express.js and EJS, featuring recipe management, meal plan creation, and nutrition tracking.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Testing](#testing)
- [Core Features](#core-features)

## ✨ Features

### 🎯 Core Meal Planning Features

- **Meal Plan Management**
  - Create custom meal plans for any date
  - View all meal plans in a clean grid layout
  - Detailed meal plan view with full nutrition breakdown
  - Delete meal plans easily
  
- **Recipe Database**
  - Browse 6+ pre-loaded healthy recipes
  - Filter recipes by meal type (Breakfast, Lunch, Dinner, Snack)
  - Filter recipes by difficulty level (Easy, Medium, Hard)
  - Detailed recipe pages with ingredients and instructions
  
- **Nutrition Tracking**
  - Automatic calorie calculation for meal plans
  - Macronutrient tracking (Protein, Carbs, Fat)
  - Visual nutrition overview
  - Target vs. actual calorie comparison
  
- **User-Friendly Interface**
  - Modern, responsive design
  - Clean and intuitive navigation
  - Beautiful card-based layouts
  - Real-time nutrition preview when creating meal plans

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **View Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Testing**: Jest & Supertest
- **Body Parsing**: body-parser

## 📁 Project Structure

```
AI_FOR_SE/
├── app.js                      # Main Express application
├── package.json                # Dependencies and scripts
├── README.md                   # This file
│
├── data/                       # Data layer
│   ├── recipes.js             # Recipe data and models
│   └── mealplans.js           # Meal plan data and helper functions
│
├── routes/                     # Route handlers
│   ├── recipes.js             # Recipe routes
│   └── mealplans.js           # Meal plan routes
│
├── views/                      # EJS templates
│   ├── mealPlanList.ejs       # List all meal plans
│   ├── mealPlanDetail.ejs     # Detailed meal plan view
│   ├── mealPlanCreate.ejs     # Create new meal plan
│   ├── recipeList.ejs         # List all recipes
│   ├── recipeDetail.ejs       # Detailed recipe view
│   ├── error.ejs              # Error page
│   └── partials/
│       ├── header.ejs         # Header partial
│       └── footer.ejs         # Footer partial
│
├── public/                     # Static assets
│   └── styles.css             # Custom CSS styles
│
└── test/                       # Test files
    ├── app.test.js            # App-level tests
    ├── mealplans.test.js      # Meal plan route tests
    └── recipes.test.js        # Recipe route tests
```

## 🚀 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Navigate to the project directory**:
   ```bash
   cd AI_FOR_SE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   Or use the standard start command:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 💻 Usage

### Creating a Meal Plan

1. Click on **"Create New Meal Plan"** button on the homepage
2. Enter a name for your meal plan
3. Select a date
4. Choose recipes for each meal type (Breakfast, Lunch, Snack, Dinner)
5. View the real-time nutrition preview
6. Click **"Create Meal Plan"** to save

### Browsing Recipes

1. Navigate to the **"Recipes"** page
2. Use filters to find recipes by:
   - Meal Type (Breakfast, Lunch, Dinner, Snack)
   - Difficulty (Easy, Medium, Hard)
3. Click on any recipe to view full details including:
   - Ingredients list
   - Step-by-step instructions
   - Nutrition information
   - Cooking time and servings

### Managing Meal Plans

1. View all your meal plans on the **"Meal Plans"** page
2. Click on any meal plan to see detailed information
3. Each meal plan shows:
   - Total calories and macros
   - Individual meals with nutrition breakdown
   - Links to full recipe details
4. Delete meal plans using the delete button

## 🛣️ API Routes

### Meal Plans Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/mealplans` | List all meal plans |
| GET | `/mealplans/new` | Show create meal plan form |
| GET | `/mealplans/:id` | View specific meal plan details |
| POST | `/mealplans` | Create a new meal plan |
| POST | `/mealplans/:id/delete` | Delete a meal plan |

### Recipe Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/recipes` | List all recipes (with optional filters) |
| GET | `/recipes/:id` | View specific recipe details |

### Query Parameters

**Recipes filtering:**
- `?mealType=Breakfast` - Filter by meal type
- `?difficulty=Easy` - Filter by difficulty
- `?date=2025-10-25` - Filter meal plans by date

## 🧪 Testing

The application includes comprehensive tests for all major features.

### Run Tests

```bash
npm test
```

### Test Coverage

```bash
npm test -- --coverage
```

### Test Files

- **app.test.js**: Tests main application routes and middleware
- **mealplans.test.js**: Tests meal plan CRUD operations
- **recipes.test.js**: Tests recipe viewing and filtering

### Example Test Scenarios

✅ Create meal plan with valid data  
✅ Validate meal plan data (missing fields)  
✅ Filter recipes by meal type and difficulty  
✅ Calculate total calories correctly  
✅ Handle 404 errors for non-existent resources  
✅ Delete meal plans successfully  

## 🎯 Core Features Implementation

### 1. Meal Plan Generation

The app allows users to create personalized meal plans by:
- Selecting recipes for different meal types
- Automatically calculating total nutrition
- Setting target calorie goals
- Organizing meals by date

**Code Reference**: `routes/mealplans.js` - POST `/mealplans`

### 2. Nutrition Tracking

Each meal plan tracks:
- **Total Calories**: Sum of all meals
- **Macronutrients**: Protein, Carbohydrates, Fat
- **Target Comparison**: Actual vs. target calories

**Real-time Preview**: When creating a meal plan, users see nutrition updates as they select recipes.

### 3. Recipe Database

Pre-loaded with 6 healthy recipes:
1. Grilled Chicken Salad (350 kcal)
2. Oatmeal with Berries (280 kcal)
3. Salmon with Roasted Vegetables (450 kcal)
4. Quinoa Buddha Bowl (420 kcal)
5. Greek Yogurt Parfait (220 kcal)
6. Turkey Stir-Fry (380 kcal)

Each recipe includes:
- Ingredients with amounts
- Step-by-step instructions
- Complete nutrition information
- Cooking times and difficulty level
- Tags for easy categorization

### 4. Data Management

The application uses in-memory data storage with helper functions:
- `getAllMealPlans()` - Get all meal plans
- `getMealPlanById(id)` - Get specific meal plan
- `getMealPlansByDate(date)` - Filter by date
- `createMealPlan(data)` - Create new meal plan
- `deleteMealPlan(id)` - Remove meal plan

**Note**: In a production environment, these would be replaced with database operations (MongoDB, PostgreSQL, etc.)

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, card-based interface
- **Color Coding**: Different colors for difficulty levels and meal types
- **Visual Hierarchy**: Clear navigation and information architecture
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔄 Future Enhancements

Potential features to add:
- User authentication and personal accounts
- Database integration (MongoDB/PostgreSQL)
- AI-powered meal plan generation
- Grocery list generation from meal plans
- Recipe favorites and ratings
- Weekly meal plan view
- Export meal plans to PDF
- Nutritional goal setting
- Recipe search functionality
- Custom recipe creation

## 📝 License

ISC

## 👨‍💻 Author

Built as part of the AI for Software Engineering course.

---

**Happy Meal Planning! 🥗🍲🥙**

