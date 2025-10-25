# 🧪 Mock System Documentation

## Overview
This directory contains the comprehensive mock system for the AI_FOR_SE meal planning application. The mock system enables true unit testing by isolating components and providing predictable test data.

## 📁 Directory Structure

```
test/mocks/
├── mockData.js          # Reusable test data and helper functions
├── mockHelpers.js       # Express mock utilities and assertion helpers
└── README.md           # This documentation

__mocks__/
└── data/
    ├── mealplans.js    # Jest mock for mealplans data module
    └── recipes.js      # Jest mock for recipes data module

test/unit/
└── routes/
    └── mealplans.unit.test.js  # Unit tests using mocks
```

## 🎯 Mock Components

### 1. **Mock Data (`mockData.js`)**
Contains reusable test data and helper functions:

#### **Sample Data:**
- **Mock Meal Plans**: 3 sample meal plans with different users and dates
- **Mock Recipes**: 4 sample recipes covering all meal types and difficulties

#### **Helper Functions:**
- `generateMealPlan()` - Create test meal plans with auto-incrementing IDs
- `generateRecipe()` - Create test recipes with auto-incrementing IDs
- `getMealPlansByUserId()` - Filter meal plans by user
- `getMealPlansByDate()` - Filter meal plans by date
- `getMealPlanById()` - Find meal plan by ID
- `getRecipesByMealType()` - Filter recipes by meal type
- `getRecipesByDifficulty()` - Filter recipes by difficulty
- `getRecipeById()` - Find recipe by ID
- `createEdgeCaseData()` - Generate edge case test data
- `resetMockData()` - Reset data for test cleanup

### 2. **Mock Helpers (`mockHelpers.js`)**
Provides utilities for creating mock Express objects and testing:

#### **Express Mock Generators:**
- `createMockRequest()` - Generate mock Express request objects
- `createMockResponse()` - Generate mock Express response objects
- `createMockNext()` - Generate mock Express next function
- `createMockRouter()` - Generate mock Express router

#### **Assertion Helpers:**
- `assertResponseCalled()` - Assert response method was called with specific args
- `assertResponseCalledTimes()` - Assert response method call count
- `assertStatusCode()` - Assert response status code
- `assertHeaders()` - Assert response headers
- `assertResponseBody()` - Assert response body content
- `assertRedirect()` - Assert redirect was called
- `assertRender()` - Assert render was called
- `assertJson()` - Assert JSON was sent

#### **Data Generators:**
- `generateMealPlanRequest()` - Generate valid meal plan requests
- `generateInvalidMealPlanRequest()` - Generate invalid requests
- `generateEmptyMealsRequest()` - Generate requests with empty meals
- `generateQueryRequest()` - Generate requests with query parameters
- `generateParamsRequest()` - Generate requests with URL parameters

#### **Performance & Error Helpers:**
- `measureExecutionTime()` - Measure function execution time
- `createDelayedMock()` - Create mocks with async delay
- `createErrorMock()` - Create mocks that throw errors
- `createRejectingMock()` - Create mocks that reject promises
- `createFlakyMock()` - Create mocks that sometimes fail

### 3. **Jest Mocks (`__mocks__/data/`)**

#### **Mealplans Mock (`mealplans.js`)**
Mocks all functions from `data/mealplans.js`:
- `getAllMealPlans()` - Returns mock meal plans array
- `getMealPlanById(id)` - Returns specific meal plan or null
- `getMealPlansByDate(date)` - Returns filtered meal plans
- `getMealPlansByUserId(userId)` - Returns user's meal plans
- `createMealPlan(data)` - Creates and returns new meal plan
- `deleteMealPlan(id)` - Deletes meal plan and returns boolean

#### **Recipes Mock (`recipes.js`)**
Mocks the recipes array from `data/recipes.js`:
- `recipes` - Mock recipes array
- `mockUtils` - Utility functions for test control
- `enhancedMocks` - Advanced mock features
- `mockGenerators` - Data generation utilities

## 🚀 Usage Examples

### **Basic Unit Testing:**
```javascript
// Import mock helpers
const { createMockRequest, createMockResponse, mockAssertions } = require('./mocks/mockHelpers');

// Create mock objects
const mockReq = createMockRequest({ body: { name: 'Test' } });
const mockRes = createMockResponse();

// Test route handler
routeHandler(mockReq, mockRes);

// Assert results
mockAssertions.assertStatusCode(mockRes, 200);
mockAssertions.assertRender(mockRes, 'expectedView', { data: 'expected' });
```

### **Using Jest Mocks:**
```javascript
// Mock the data module
jest.mock('../data/mealplans');

// Import mocked module
const mealplansData = require('../data/mealplans');

// Use in tests
mealplansData.getAllMealPlans.mockReturnValue(mockData);
```

### **Advanced Mock Features:**
```javascript
// Mock with specific return values
mealplansData.getMealPlanById.mockImplementation((id) => {
    if (id === '1') return specificMealPlan;
    return null;
});

// Mock with errors
mealplansData.createMealPlan.mockImplementation(() => {
    throw new Error('Database error');
});

// Mock with async delay
mealplansData.getAllMealPlans.mockImplementation(async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockData;
});
```

## 🧪 Test Types

### **1. Unit Tests**
- Test individual route handlers in isolation
- Use mocked dependencies
- Fast execution
- Predictable results

### **2. Integration Tests**
- Test complete request/response cycles
- Use mocked data layer
- Test route interactions
- Verify response formats

### **3. Mock Tests**
- Test mock functionality itself
- Verify mock behavior
- Test edge cases
- Performance testing

## 📊 Benefits

### **Test Isolation:**
- No dependencies on real data
- Tests don't affect each other
- Predictable test results
- Fast test execution

### **Edge Case Testing:**
- Easy to create edge cases
- Test error conditions
- Test boundary values
- Test failure scenarios

### **Performance Testing:**
- Measure execution times
- Test with delays
- Load testing capabilities
- Memory usage monitoring

### **Maintainability:**
- Centralized test data
- Reusable mock utilities
- Consistent test patterns
- Easy to update

## 🔧 Configuration

### **Jest Configuration:**
The mocks work with the existing Jest configuration in `jest.config.js`:
- Automatic mock discovery in `__mocks__` directory
- Manual mocks with `jest.mock()` calls
- Mock reset between tests

### **Test Setup:**
```javascript
// In test files
beforeEach(() => {
    jest.clearAllMocks();
    // Reset mock data if needed
});

afterEach(() => {
    // Cleanup if needed
});
```

## 🎯 Best Practices

### **1. Mock Strategy:**
- Mock at the data layer boundary
- Use real Express objects when possible
- Mock external dependencies
- Keep mocks simple and focused

### **2. Test Organization:**
- Group related tests
- Use descriptive test names
- Test both success and failure cases
- Verify mock interactions

### **3. Data Management:**
- Use consistent test data
- Reset data between tests
- Create edge cases explicitly
- Document test data purpose

### **4. Assertions:**
- Assert both return values and side effects
- Verify mock call counts and arguments
- Test error conditions
- Check response formats

## 🚨 Troubleshooting

### **Common Issues:**

1. **Mocks not working:**
   - Check `jest.mock()` calls are at the top of test files
   - Verify mock files are in correct `__mocks__` directory
   - Ensure mock exports match original module exports

2. **Test data conflicts:**
   - Use `resetMockData()` in `beforeEach` hooks
   - Avoid sharing mutable state between tests
   - Use `jest.clearAllMocks()` to reset mock calls

3. **Async mock issues:**
   - Use `async/await` with async mocks
   - Handle promise rejections properly
   - Use `createDelayedMock()` for timing tests

4. **Assertion failures:**
   - Check mock call arguments match expectations
   - Verify response object structure
   - Use `mockAssertions` helpers for consistency

## 📈 Performance

### **Mock Performance:**
- **Fast execution**: Mocks run in memory
- **No I/O**: No database or file system access
- **Predictable timing**: Consistent execution times
- **Low memory usage**: Minimal memory footprint

### **Test Performance:**
- **Unit tests**: ~1-5ms per test
- **Integration tests**: ~10-50ms per test
- **Mock tests**: ~1-10ms per test
- **Total suite**: ~1-2 seconds for all tests

## 🔄 Future Enhancements

### **Planned Improvements:**
- [ ] Database mock integration
- [ ] API endpoint mocking
- [ ] Authentication mock system
- [ ] File upload mocking
- [ ] WebSocket mocking
- [ ] Performance benchmarking tools

### **Advanced Features:**
- [ ] Mock data factories
- [ ] Automatic mock generation
- [ ] Mock validation tools
- [ ] Test data visualization
- [ ] Mock performance profiling

---

**Generated:** $(date)  
**Version:** 1.0.0  
**Status:** Production Ready ✅
