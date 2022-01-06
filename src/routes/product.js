const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.post('/store', productController.store);
router.get('/create', productController.create);
router.get('/:id', productController.show);

module.exports = router;