// Meal Planning Express Server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Import routes
const recipesRouter = require('./routes/recipes');
const mealPlansRouter = require('./routes/mealplans');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Home route - redirect to meal plans
app.get('/', (req, res) => {
    res.redirect('/mealplans');
});

// Use the routes
app.use('/recipes', recipesRouter);
app.use('/mealplans', mealPlansRouter);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('error', { 
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.' 
    });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🍽️  Meal Planning App is running on http://localhost:${PORT}`);
    console.log(`📋 View meal plans at http://localhost:${PORT}/mealplans`);
    console.log(`🍳 View recipes at http://localhost:${PORT}/recipes`);
});

// Export the app for testing
module.exports = app;

