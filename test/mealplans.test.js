// Test meal plans routes with mocks
const request = require('supertest');
const app = require('../app');

// Mock the data modules
jest.mock('../data/mealplans');
jest.mock('../data/recipes');

describe('Meal Plans Routes', () => {
    describe('GET /mealplans', () => {
        it('should return 200 and render meal plans list', async () => {
            const response = await request(app)
                .get('/mealplans')
                .expect(200);
            
            expect(response.text).toContain('Meal Plans');
        });

        it('should filter meal plans by date', async () => {
            const response = await request(app)
                .get('/mealplans?date=2025-10-25')
                .expect(200);
            
            expect(response.text).toContain('Meal Plans');
        });
    });

    describe('GET /mealplans/new', () => {
        it('should return 200 and show create meal plan form', async () => {
            const response = await request(app)
                .get('/mealplans/new')
                .expect(200);
            
            expect(response.text).toContain('Create Meal Plan');
            expect(response.text).toContain('Breakfast');
            expect(response.text).toContain('Lunch');
        });
    });

    describe('GET /mealplans/:id', () => {
        it('should return 200 and show meal plan details for valid id', async () => {
            const response = await request(app)
                .get('/mealplans/1')
                .expect(200);
            
            expect(response.text).toContain('Balanced Daily Plan');
            expect(response.text).toContain('Nutrition Overview');
        });

        it('should return 404 for non-existent meal plan', async () => {
            const response = await request(app)
                .get('/mealplans/9999')
                .expect(404);
            
            expect(response.text).toContain('Meal Plan Not Found');
        });
    });

    describe('POST /mealplans', () => {
        it('should create a new meal plan with valid data', async () => {
            const mealPlanData = {
                name: 'Test Meal Plan',
                date: '2025-11-01',
                userId: 'testuser',
                meals: JSON.stringify([
                    { type: 'Breakfast', recipeId: '2' },
                    { type: 'Lunch', recipeId: '1' }
                ])
            };

            const response = await request(app)
                .post('/mealplans')
                .send(mealPlanData)
                .expect(302); // Redirect after creation

            expect(response.headers.location).toMatch(/\/mealplans\/\d+/);
        });

        it('should return 400 for invalid meal plan data (missing date)', async () => {
            const invalidData = {
                name: 'Test Meal Plan',
                meals: JSON.stringify([{ type: 'Breakfast', recipeId: '2' }])
            };

            const response = await request(app)
                .post('/mealplans')
                .send(invalidData)
                .expect(400);

            expect(response.text).toContain('Invalid Data');
        });

        it('should return 400 for invalid meal plan data (empty meals)', async () => {
            const invalidData = {
                name: 'Test Meal Plan',
                date: '2025-11-01',
                meals: JSON.stringify([])
            };

            const response = await request(app)
                .post('/mealplans')
                .send(invalidData)
                .expect(400);

            expect(response.text).toContain('Invalid Data');
        });
    });

    describe('POST /mealplans/:id/delete', () => {
        it('should delete an existing meal plan', async () => {
            const response = await request(app)
                .post('/mealplans/2/delete')
                .expect(302); // Redirect after deletion

            expect(response.headers.location).toBe('/mealplans');
        });

        it('should return 404 when trying to delete non-existent meal plan', async () => {
            const response = await request(app)
                .post('/mealplans/9999/delete')
                .expect(404);

            expect(response.text).toContain('Meal Plan Not Found');
        });
    });
});

describe('Meal Plan Data Calculations', () => {
    it('should calculate total calories correctly', async () => {
        const mealPlanData = {
            name: 'Calorie Test Plan',
            date: '2025-11-02',
            meals: JSON.stringify([
                { type: 'Breakfast', recipeId: '2' }, // 280 kcal
                { type: 'Lunch', recipeId: '1' }      // 350 kcal
            ])
        };

        const response = await request(app)
            .post('/mealplans')
            .send(mealPlanData)
            .expect(302);

        const mealPlanId = response.headers.location.split('/').pop();
        
        const detailResponse = await request(app)
            .get(`/mealplans/${mealPlanId}`)
            .expect(200);

        expect(detailResponse.text).toContain('630'); // Total calories
    });
});

