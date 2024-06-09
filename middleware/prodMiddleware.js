const db = require('../db/firestore');

const prodMiddleware = async (req, res, next) => {
    try {
        const productId = req.params.productId; // Ambil ID produk dari URL

        // Mengambil detail produk dari database berdasarkan ID
        const productRef = db.collection('products').doc(productId);
        const productDoc = await productRef.get();

        if (!productDoc.exists) {
            return res.status(404).json({
                status: "fail",
                message: "Product not found"
            });
        }

        // Menambahkan data produk ke dalam req
        req.productData = productDoc.data();

        next(); // Lanjutkan ke handler rute berikutnya
    } catch (error) {
        console.error("Error fetching product details:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

module.exports = prodMiddleware;

