const express = require('express');
const prodMiddleware = require('../middleware/prodMiddleware');
const { getProduct } = require('../controllers/prodController'); // Pastikan nama fungsi dan path-nya benar

const router = express.Router();

router.get('/:productId', prodMiddleware, (req, res) => {
    try {
        // Mengembalikan detail produk dari data yang telah disimpan dalam req oleh middleware
        const productData = req.productData;

        // Mengembalikan detail produk dalam respons JSON
        res.status(200).json({
            status: "success",
            data: productData
        });
    } catch (error) {
        console.error("Error handling product details:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
