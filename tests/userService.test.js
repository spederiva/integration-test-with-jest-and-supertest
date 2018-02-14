const service = require('../services/userService');

test('UserService => return user returns an pre-defined object', () => {

	expect(service.getUser()).toEqual({
		name: 'Sebastian',
		age: 42,
		isMarried: true,
		children: 3,
		timeStamp: new Date('2018-02-11T09:47:22.369Z')
	});

});

test('UserService => return user something', () => {

	expect(service.getUser()).toEqual(expect.anything());

});

test('UserService => return user with name "Sebastian"', () => {

	expect(service.getUser().name).toBe('Sebastian');

});

test('UserService => return user match object', () => {
	expect(service.getUser()).toMatchObject({
		name: 'Sebastian',
		// age: 42,
		// isMarried: true,
		// children: 3,
		// timeStamp: new Date('2018-02-11T09:47:22.369Z')
	});
});

// ==========================================
// test('UserService => return user returns an object containing values', () =>{
// 	const onPress = jest.fn();

// 	//simulatePresses(onPress);

// 	expect(service.getUser()).toBeCalledWith(
// 		expect.objectContaining({
// 			name: expect.any(String),
// 			// age: 42,
// 			// isMarried: true,
// 			// children: 3,
// 			// timeStamp: new Date('2018-02-11T09:47:22.369Z')
// 		}));

// });

// test('UserService => return user with name "Age"', () =>{

// 	expect(service.getUser().age).toBe('Sebastian');

// });