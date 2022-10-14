// import app and create all tests with supertest

const request = require('supertest');
const app = require('../src/app');


//test for /v1 route
describe('Test the /v1 path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v1');
        expect(response.statusCode).toBe(200);
    });
}
);

//test for  /location route
describe('Test the /location path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/location');
        expect(response.statusCode).toBe(200);
    });
}
);

//test for /current route
describe('Test the /current path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/current');
        expect(response.statusCode).toBe(200);
    });
}
);

//test for /forecast route
describe('Test the /forecast path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/forecast');
        expect(response.statusCode).toBe(200);
    });
}
);


