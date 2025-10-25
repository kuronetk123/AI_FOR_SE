// Test recipes routes
const request = require('supertest');
const app = require('../app');

describe('Recipes Routes', () => {
    describe('GET /recipes', () => {
        it('should return 200 and render recipes list', async () => {
            const response = await request(app)
                .get('/recipes')
                .expect(200);
            
            expect(response.text).toContain('Recipes');
            expect(response.text).toContain('Grilled Chicken Salad');
        });

        it('should filter recipes by meal type', async () => {
            const response = await request(app)
                .get('/recipes?mealType=Breakfast')
                .expect(200);
            
            expect(response.text).toContain('Breakfast');
            expect(response.text).toContain('Oatmeal with Berries');
        });

        it('should filter recipes by difficulty', async () => {
            const response = await request(app)
                .get('/recipes?difficulty=Easy')
                .expect(200);
            
            expect(response.text).toContain('Easy');
        });

        it('should handle multiple filters', async () => {
            const response = await request(app)
                .get('/recipes?mealType=Dinner&difficulty=Medium')
                .expect(200);
            
            expect(response.text).toContain('Recipes');
        });
    });

    describe('GET /recipes/:id', () => {
        it('should return 200 and show recipe details for valid id', async () => {
            const response = await request(app)
                .get('/recipes/1')
                .expect(200);
            
            expect(response.text).toContain('Grilled Chicken Salad');
            expect(response.text).toContain('Nutrition Information');
            expect(response.text).toContain('Ingredients');
            expect(response.text).toContain('Instructions');
        });

        it('should return 404 for non-existent recipe', async () => {
            const response = await request(app)
                .get('/recipes/9999')
                .expect(404);
            
            expect(response.text).toContain('Recipe Not Found');
        });

        it('should display nutrition information', async () => {
            const response = await request(app)
                .get('/recipes/1')
                .expect(200);
            
            expect(response.text).toContain('350'); // Calories
            expect(response.text).toContain('35'); // Protein
        });

        it('should display ingredients list', async () => {
            const response = await request(app)
                .get('/recipes/2')
                .expect(200);
            
            expect(response.text).toContain('Rolled oats');
            expect(response.text).toContain('Mixed berries');
        });

        it('should display cooking instructions', async () => {
            const response = await request(app)
                .get('/recipes/3')
                .expect(200);
            
            expect(response.text).toContain('Step 1');
            expect(response.text).toContain('Instructions');
        });
    });
});

describe('Recipe Data Validation', () => {
    it('should have valid nutrition data', async () => {
        const response = await request(app)
            .get('/recipes/1')
            .expect(200);
        
        // Check that nutrition values are present
        expect(response.text).toContain('Calories');
        expect(response.text).toContain('Protein');
        expect(response.text).toContain('Carbs');
        expect(response.text).toContain('Fat');
    });

    it('should display recipe tags', async () => {
        const response = await request(app)
            .get('/recipes/1')
            .expect(200);
        
        expect(response.text).toContain('Healthy');
    });
});

