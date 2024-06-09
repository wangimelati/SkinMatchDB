class product {
    constructor(productID, product_name, desc, skintypeID){
        this.productID = productID
        this.product_name = product_name
        this.desc = desc
        this.gambarProduct = null
        this.skintypeID = skintypeID
        this.createdAt = new Date()
        this.updatedAt = null
    }
}
module.exports = product