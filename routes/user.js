const express = require('express');
const router = express.Router();

const services = require('../services/userService');

router.get('/user/:id', (req, resp) => {
	console.log('GET /user/' + req.params.id);

	resp.json(services.getUser(req.params.id));

});


router.post('/user', (req, resp) => {
	console.log('POST /user/' + JSON.stringify(req.body));

	resp.status(201).json(services.createUser(req.body));
});


module.exports = router;