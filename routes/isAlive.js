const express = require('express');
const router = express.Router();

router.get('/isAlive', (req, resp) => {
	resp.send('ok');
});

module.exports = router;
