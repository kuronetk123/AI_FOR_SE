# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
cd AI_FOR_SE
npm install
```

### 2️⃣ Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### 3️⃣ Open Your Browser

Navigate to: **http://localhost:3000**

---

## 🎯 What to Try First

### Create Your First Meal Plan
1. Click **"Create New Meal Plan"** on the homepage
2. Give it a name like "My First Plan"
3. Select today's date
4. Choose recipes for each meal:
   - **Breakfast**: Oatmeal with Berries
   - **Lunch**: Grilled Chicken Salad
   - **Snack**: Greek Yogurt Parfait
   - **Dinner**: Salmon with Roasted Vegetables
5. Watch the nutrition preview update in real-time!
6. Click **"Create Meal Plan"**

### Explore Recipes
1. Click **"Recipes"** in the navigation
2. Try filtering by:
   - Meal Type: "Breakfast"
   - Difficulty: "Easy"
3. Click on any recipe to see full details

### View Your Meal Plans
1. Click **"Meal Plans"** in the navigation
2. See all your meal plans in a grid layout
3. Click on any plan to see detailed nutrition breakdown
4. Delete plans you no longer need

---

## 🧪 Run Tests

```bash
npm test
```

To see test coverage:
```bash
npm test -- --coverage
```

---

## 📂 Project Structure Overview

```
AI_FOR_SE/
├── app.js              # Main server file
├── data/               # Recipes & meal plan data
├── routes/             # API routes
├── views/              # EJS templates
├── public/             # CSS & static files
└── test/               # Test files
```

---

## 🔧 Troubleshooting

### Port Already in Use?
Change the port in `app.js` or set environment variable:
```bash
PORT=3001 npm start
```

### Dependencies Not Installing?
Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

### Tests Failing?
Make sure the server is not running when you run tests, or tests will conflict with the running server.

---

## 📚 Learn More

See the full [README.md](README.md) for:
- Complete feature list
- API documentation
- Architecture details
- Future enhancements

---

**Happy Meal Planning! 🍽️**

