const express = require('express');
const ProductConroller = require('../controllers/product')

const router = express.Router();


// /admin-product => GET
router.get('/add-product', ProductConroller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', ProductConroller.postAddProduct);

module.exports = router;