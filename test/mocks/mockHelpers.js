// Mock helpers for Express request/response objects and testing utilities
// This file provides utilities for creating mock Express objects and assertion helpers

// Mock Express Request object generator
const createMockRequest = (overrides = {}) => {
    const defaultRequest = {
        body: {},
        params: {},
        query: {},
        headers: {},
        method: 'GET',
        url: '/',
        path: '/',
        originalUrl: '/',
        protocol: 'http',
        hostname: 'localhost',
        ip: '127.0.0.1',
        get: jest.fn((header) => defaultRequest.headers[header.toLowerCase()]),
        header: jest.fn((header) => defaultRequest.headers[header.toLowerCase()]),
        is: jest.fn(() => false),
        accepts: jest.fn(() => false),
        acceptsCharsets: jest.fn(() => false),
        acceptsEncodings: jest.fn(() => false),
        acceptsLanguages: jest.fn(() => false),
        range: jest.fn(() => false),
        param: jest.fn((name) => defaultRequest.params[name]),
        route: {},
        cookies: {},
        signedCookies: {},
        fresh: false,
        stale: true,
        xhr: false,
        secure: false,
        subdomains: [],
        app: {},
        baseUrl: '',
        res: null
    };

    return { ...defaultRequest, ...overrides };
};

// Mock Express Response object generator
const createMockResponse = (overrides = {}) => {
    const response = {
        statusCode: 200,
        locals: {},
        headers: {},
        body: null,
        status: jest.fn((code) => {
            response.statusCode = code;
            return response;
        }),
        send: jest.fn((data) => {
            response.body = data;
            return response;
        }),
        json: jest.fn((data) => {
            response.body = data;
            response.headers['content-type'] = 'application/json';
            return response;
        }),
        render: jest.fn((view, data) => {
            response.body = { view, data };
            response.headers['content-type'] = 'text/html';
            return response;
        }),
        redirect: jest.fn((url) => {
            response.statusCode = 302;
            response.headers.location = url;
            return response;
        }),
        set: jest.fn((field, value) => {
            if (typeof field === 'object') {
                Object.assign(response.headers, field);
            } else {
                response.headers[field] = value;
            }
            return response;
        }),
        get: jest.fn((field) => response.headers[field.toLowerCase()]),
        cookie: jest.fn(() => response),
        clearCookie: jest.fn(() => response),
        end: jest.fn(() => response),
        sendFile: jest.fn(() => response),
        download: jest.fn(() => response),
        jsonp: jest.fn(() => response),
        type: jest.fn(() => response),
        format: jest.fn(() => response),
        attachment: jest.fn(() => response),
        app: {},
        req: null
    };

    return { ...response, ...overrides };
};

// Mock Express Next function
const createMockNext = () => jest.fn();

// Mock Express Router
const createMockRouter = () => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    patch: jest.fn(),
    use: jest.fn(),
    param: jest.fn(),
    route: jest.fn(() => ({
        get: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
        patch: jest.fn()
    }))
});

// Assertion helpers for mocked calls
const mockAssertions = {
    // Assert that a response method was called with specific arguments
    assertResponseCalled: (mockResponse, method, ...args) => {
        expect(mockResponse[method]).toHaveBeenCalledWith(...args);
    },

    // Assert that a response method was called a specific number of times
    assertResponseCalledTimes: (mockResponse, method, times) => {
        expect(mockResponse[method]).toHaveBeenCalledTimes(times);
    },

    // Assert that a response has a specific status code
    assertStatusCode: (mockResponse, expectedCode) => {
        expect(mockResponse.statusCode).toBe(expectedCode);
    },

    // Assert that a response has specific headers
    assertHeaders: (mockResponse, expectedHeaders) => {
        Object.entries(expectedHeaders).forEach(([key, value]) => {
            expect(mockResponse.headers[key.toLowerCase()]).toBe(value);
        });
    },

    // Assert that a response body contains specific data
    assertResponseBody: (mockResponse, expectedData) => {
        expect(mockResponse.body).toEqual(expect.objectContaining(expectedData));
    },

    // Assert that a redirect was called with specific URL
    assertRedirect: (mockResponse, expectedUrl) => {
        expect(mockResponse.redirect).toHaveBeenCalledWith(expectedUrl);
        expect(mockResponse.statusCode).toBe(302);
        expect(mockResponse.headers.location).toBe(expectedUrl);
    },

    // Assert that a render was called with specific view and data
    assertRender: (mockResponse, expectedView, expectedData) => {
        expect(mockResponse.render).toHaveBeenCalledWith(expectedView, expectedData);
        expect(mockResponse.headers['content-type']).toBe('text/html');
    },

    // Assert that JSON was sent with specific data
    assertJson: (mockResponse, expectedData) => {
        expect(mockResponse.json).toHaveBeenCalledWith(expectedData);
        expect(mockResponse.headers['content-type']).toBe('application/json');
    }
};

// Mock data generators for common test scenarios
const mockDataGenerators = {
    // Generate a valid meal plan request
    generateMealPlanRequest: (overrides = {}) => ({
        body: {
            name: 'Test Meal Plan',
            date: '2025-10-30',
            userId: 'testuser',
            meals: JSON.stringify([
                {
                    type: 'Breakfast',
                    recipeId: '1'
                }
            ]),
            ...overrides
        }
    }),

    // Generate an invalid meal plan request
    generateInvalidMealPlanRequest: (overrides = {}) => ({
        body: {
            name: '',
            date: '',
            userId: '',
            meals: '',
            ...overrides
        }
    }),

    // Generate a request with empty meals
    generateEmptyMealsRequest: (overrides = {}) => ({
        body: {
            name: 'Test Plan',
            date: '2025-10-30',
            userId: 'testuser',
            meals: JSON.stringify([]),
            ...overrides
        }
    }),

    // Generate a request with query parameters
    generateQueryRequest: (query = {}) => ({
        query: {
            date: '2025-10-25',
            userId: 'user1',
            ...query
        }
    }),

    // Generate a request with URL parameters
    generateParamsRequest: (params = {}) => ({
        params: {
            id: '1',
            ...params
        }
    })
};

// Performance testing utilities
const performanceHelpers = {
    // Measure execution time of a function
    measureExecutionTime: async (fn, iterations = 1) => {
        const times = [];
        
        for (let i = 0; i < iterations; i++) {
            const start = process.hrtime.bigint();
            await fn();
            const end = process.hrtime.bigint();
            times.push(Number(end - start) / 1000000); // Convert to milliseconds
        }
        
        return {
            times,
            average: times.reduce((a, b) => a + b, 0) / times.length,
            min: Math.min(...times),
            max: Math.max(...times),
            total: times.reduce((a, b) => a + b, 0)
        };
    },

    // Create a mock function that simulates async delay
    createDelayedMock: (delay = 100, returnValue = undefined) => {
        return jest.fn().mockImplementation(() => 
            new Promise(resolve => 
                setTimeout(() => resolve(returnValue), delay)
            )
        );
    }
};

// Test cleanup utilities
const cleanupHelpers = {
    // Clear all Jest mocks
    clearAllMocks: () => {
        jest.clearAllMocks();
    },

    // Reset all Jest mocks
    resetAllMocks: () => {
        jest.resetAllMocks();
    },

    // Restore all Jest mocks
    restoreAllMocks: () => {
        jest.restoreAllMocks();
    },

    // Create a mock that can be easily reset
    createResettableMock: (implementation) => {
        const mock = jest.fn(implementation);
        mock.reset = () => {
            mock.mockClear();
            mock.mockReset();
        };
        return mock;
    }
};

// Error simulation utilities
const errorHelpers = {
    // Create a mock that throws an error
    createErrorMock: (errorMessage = 'Mock error') => {
        return jest.fn().mockImplementation(() => {
            throw new Error(errorMessage);
        });
    },

    // Create a mock that rejects with an error
    createRejectingMock: (errorMessage = 'Mock async error') => {
        return jest.fn().mockRejectedValue(new Error(errorMessage));
    },

    // Create a mock that sometimes fails
    createFlakyMock: (failureRate = 0.5, successValue = undefined, errorMessage = 'Flaky mock error') => {
        return jest.fn().mockImplementation(() => {
            if (Math.random() < failureRate) {
                throw new Error(errorMessage);
            }
            return successValue;
        });
    }
};

module.exports = {
    // Core mock generators
    createMockRequest,
    createMockResponse,
    createMockNext,
    createMockRouter,
    
    // Assertion helpers
    mockAssertions,
    
    // Data generators
    mockDataGenerators,
    
    // Performance helpers
    performanceHelpers,
    
    // Cleanup helpers
    cleanupHelpers,
    
    // Error helpers
    errorHelpers
};