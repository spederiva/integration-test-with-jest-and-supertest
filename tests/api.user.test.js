import request from './environment';

describe('API /user', () => {

	test('Routing without Id does not responde', async () => {
		const response = await request.get('/user');

		expect(response.statusCode).toBe(404);
	});

	test('Get Pre-Defined user', async () => {
		const response = await request.get('/user/1');

		expect(response.body).toBeDefined();

		expect(response.body).toMatchObject({
			name: 'Sebastian',
			age: 42
		});
	});

	test('Create New User', async () => {
		const response = await request
			.post('/user')
			.set('Content-Type', 'application/json')
			.send({name: 'Itamar'});

		expect(response.statusCode).toEqual(201);

		expect(response.body).toMatchObject({
			name: 'Itamar'
		});
	});

	test('Get Previous Created User', async ()=>{
		const response = await request.get('/user/2');

		expect(response.body).toMatchObject({
			name: 'Itamar'
		});
	});

});