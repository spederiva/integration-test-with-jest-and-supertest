const userService = {
	_id: 1,

	_users: [{
		id: 1,
		name: 'Sebastian',
		age: 42,
		isMarried: true,
		children: 3,
		timeStamp: new Date('2018-02-11T09:47:22.369Z')
	}],

	getUser: (id) => {
		// console.log('yeah!');

		return userService._users.find(u => u.id === +id);
	},

	createUser: (newUser) => {
		const user = Object.assign({}, newUser, {
			id: ++userService._id,
			timeStamp: new Date()
		});

		userService._users.push(user);

		return user;
	}
};

module.exports = userService;