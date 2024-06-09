const express = require('express');
const prodMiddleware = require('../middleware/prodMiddleware');
const { getProduct } = require('../controllers/prodController'); // Pastikan nama fungsi dan path-nya benar

const router = express.Router();

// Menggunakan parameter dinamis untuk ID produk dalam URL
router.get('/detail-product/:productId', prodMiddleware, getProduct);

module.exports = router;
