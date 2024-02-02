const express = require('express');
const router = express.Router();
const ProductConroller = require('../controllers/product')

router.get('/', ProductConroller.getProduct); 

module.exports = router;
