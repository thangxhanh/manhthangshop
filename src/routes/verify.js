const express = require('express');
const router = express.Router();

const verifyController = require('../app/controllers/VerifyController');

router.get('/login', verifyController.login);
router.get('/register', verifyController.register);
router.post('/save', verifyController.save);
router.post('/dangnhap_', verifyController.dangnhap_);
router.get('/logout', verifyController.logout);

module.exports = router;