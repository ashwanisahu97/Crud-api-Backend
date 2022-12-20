require("dotenv").config({ path: "./src/.env" });
// const connect = require("./src/configs/db");
const mongoose = require("mongoose");
const productJson = require("./product.json");
const Product = require("./src/Models/product.model.js");
mongoose.set('strictQuery', false);

const start = async() => { 
    try {
        await mongoose.connect(`mongodb+srv://Ashwani:112345678901@productcluster.3wdobiq.mongodb.net/?retryWrites=true&w=majority`)
        await Product.create(productJson);
        console.log("success");
    } catch (error) { 
        console.log("my error ", error);
    }
    
}
start();


