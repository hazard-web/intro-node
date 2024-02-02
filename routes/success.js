const express = require('express');
const path = require('path');

const routeDir = require('../util/path');

const router = express.Router();

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'success.html'))
});



module.exports = router;