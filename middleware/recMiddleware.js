const db = require('../db/firestore');

const recMiddleware = async (req, res, next) => {
    try {
        const skinType = req.user.skinType; // Skin type dari pengguna yang disimpan dalam req.user

        // Mendapatkan daftar produk yang sesuai dengan skin type pengguna
        const productsRef = db.collection('products').where('skintypeID', '==', skinType);
        const snapshot = await productsRef.get();

        const recommendedProducts = [];
        snapshot.forEach(doc => {
            recommendedProducts.push({
                productId: doc.id,
                productName: doc.data().productName,
                productImage: doc.data().productImage
            });
        });

        req.recommendedProducts = recommendedProducts; // Menyimpan produk yang direkomendasikan dalam req
        next();
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
};

module.exports = recMiddleware;
