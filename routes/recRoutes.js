const express = require('express');
const recMiddleware = require('../middleware/recMiddleware');
const { getRec } = require('../controllers/recController');

const router = express.Router();

router.get('/recommendation', recMiddleware, (req, res) => {
    try {
        // Produk yang direkomendasikan telah disimpan dalam req oleh middleware
        const recommendedProducts = req.recommendedProducts;

        res.status(200).json({
            status: "success",
            data: recommendedProducts
        });
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
