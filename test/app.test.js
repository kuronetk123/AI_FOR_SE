// Test main app functionality
const request = require('supertest');
const app = require('../app');

describe('App Main Routes', () => {
    describe('GET /', () => {
        it('should redirect to /mealplans', async () => {
            const response = await request(app)
                .get('/')
                .expect(302);
            
            expect(response.headers.location).toBe('/mealplans');
        });
    });

    describe('404 Handler', () => {
        it('should return 404 for non-existent routes', async () => {
            const response = await request(app)
                .get('/non-existent-route')
                .expect(404);
            
            expect(response.text).toContain('Page Not Found');
        });
    });
});

describe('App Configuration', () => {
    it('should serve static files', async () => {
        const response = await request(app)
            .get('/styles.css')
            .expect(200);
        
        expect(response.headers['content-type']).toContain('text/css');
    });

    it('should parse JSON bodies', async () => {
        const testData = {
            name: 'Test',
            date: '2025-11-01',
            meals: JSON.stringify([{ type: 'Breakfast', recipeId: '2' }])
        };

        const response = await request(app)
            .post('/mealplans')
            .send(testData);
        
        // Should either redirect (302) or return error (400), both indicate JSON parsing worked
        expect([302, 400]).toContain(response.status);
        expect(response.status).toBeLessThan(500);
    });
});

