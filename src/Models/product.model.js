const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    company: {
        type: String,
        required:true
    },
})
const Product = mongoose.model("Product", productSchema);

module.exports = Product;