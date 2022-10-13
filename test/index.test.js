//import app module and create test
const app = require('../src/app');
const request = require('supertest');

//test for /v1 route
describe('Test the v1 path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/v1').send();
    expect(response.statusCode).toBe(200);
  });
});

//test for current weather
describe('Test the current weather path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/current').send();
    console.log("linea 9", response.statusCode);
    expect(response.statusCode).toBe(200);
  });
});

//test for forecast weather
// describe('Test the forecast weather path', () => {
//     test('It should response the GET method', async () => {
//         const response = await supertest(app).get('/forecast');
//         expect(response.statusCode).toBe(200);
//     });
//     });

// //test for location
// describe('Test the location path', () => {
//     test('It should response the GET method', async () => {
//         const response = await supertest(app).get('/location');
//         expect(response.statusCode).toBe(200);
//     });
// });
