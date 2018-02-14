// const request = require('./environment');
import request from './environment';

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

	test('Content Type is Json', () => {
		// console.log(JSON.stringify(response));
		expect(response.header['content-type']).toMatch('application/json');
	})

	test('Get Users Respond 200', () => {
		// const response = await request.get('/user');

		expect(response.statusCode).toBe(200);
	});

	test('Get User - Returns an Object', async () => {
		expect(response.body).toBeDefined();
	});

	test('Get Users - Result Sebastian', () => {
		// const response = await request.get('/user');

		expect(response.body).toMatchObject({
			name: 'Sebastian'
		});
	});


});