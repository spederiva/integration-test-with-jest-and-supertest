import request from './environment';

describe('Server Responds', () => {

	test('/isAlive responds status 200', async () => {
		const resp = await request.get('/isAlive');

		expect(resp.statusCode).toBe(200);
	});

	test('/isAlive - Returns an Object', async () => {
		const resp = await request.get('/isAlive');

		expect(resp.body).toBeDefined();
	});


	test('/isAlive responds "ok"', async () => {
		const resp = await request.get('/isAlive');

		expect(resp.text).toMatch('ok');
	})


});