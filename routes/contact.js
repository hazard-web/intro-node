const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contact');


router.get('/contactus', ContactController.getContactus);

router.post('/contactus', ContactController.postContactus);


module.exports = router;