const express = require('express');
const path = require('path');
const routeDir = require('../util/path');

const router = express.Router();

// /admin-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;