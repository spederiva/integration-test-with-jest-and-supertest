// const app = require('../app');
const supertest = require('supertest');
const request = supertest('http://localhost:8080');
// const request = supertest(app);

module.exports = request;