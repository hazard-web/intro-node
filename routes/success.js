const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact');

router.get('/success', ContactController.getSuccess);



module.exports = router;