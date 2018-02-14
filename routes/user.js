const express = require('express');
const router = express.Router();

const services = require('../services/userService');

router.get('/user', (req, resp) => {

	resp.json(services.getUser());

});

// console.log(router);
// console.log(router.params);
// console.log(router.Function);

module.exports = router;