// const app = require('../app');
const supertest = require('supertest');
const request = supertest('http://localhost:8080');
// const request = supertest(app);

describe('UserService => Getting Something!', () => {
	let response;

	beforeAll(async () => {
		const resp = await request.get('/user/1');

		response = resp;
	});

	test('General Checking - Async', async () => {
		const response = await request.get('/');

		expect(response.statusCode).toBe(404);
	});

	test('Content Type is Json', ()=>{
		// console.log(JSON.stringify(response));
		expect(response.header['content-type']).toMatch('application/json');
	})

	test('Get Users Respond 200', () => {
		// const response = await request.get('/user');

		expect(response.statusCode).toBe(200);
	});

	test('Get Users - Result Sebastian', () => {
		// const response = await request.get('/user');

		expect(response.body).toMatchObject({
			name: 'Sebastian'
		});
	});


});