const service = require('../services/userService');

test('UserService => return user returns an pre-defined object', () => {

	expect(service.getUser(1)).toEqual({
		id: 1,
		name: 'Sebastian',
		age: 42,
		isMarried: true,
		children: 3,
		timeStamp: new Date('2018-02-11T09:47:22.369Z')
	});

});

test('UserService => return user something', () => {

	expect(service.getUser(1)).toEqual(expect.anything());

});

test('UserService => return user with name "Sebastian"', () => {

	expect(service.getUser(1).name).toBe('Sebastian');

});

test('UserService => return user match object', () => {
	expect(service.getUser(1)).toMatchObject({
		name: 'Sebastian',
		// age: 42,
		// isMarried: true,
		// children: 3,
		// timeStamp: new Date('2018-02-11T09:47:22.369Z')
	});
});