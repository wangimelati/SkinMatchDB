const db = require('../db/firestore');

const getProduct = async (req, res) => {
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

        const productData = productDoc.data();

        // Mengembalikan detail produk dalam respons
        res.status(200).json({
            status: "success",
            data: {
                productName: productData.productName,
                productImage: productData.productImage,
                description: productData.description
            }
        });
    } catch (error) {
        console.error("Error fetching product details:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

module.exports = getProduct;
