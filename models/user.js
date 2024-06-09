class user {
    constructor(email, password, name, skintypeID){
        this.name = name
        this.email = email
        this.password = password
        this.gambar_profil = null
        // skin type sebagai foreign key juga masuk dalam model
        this.skintypeID = skintypeID
        this.createdAt = new Date()
        this.updatedAt = null
        this.token = {
            auth: null,
            forgetPass: null
        };
    }
}
module.exports = user