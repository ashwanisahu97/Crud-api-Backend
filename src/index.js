const express = require("express");
const app = express();
// const connect = require("./Configs/db")
const Product=require("../src/Models/product.model")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config(); 
mongoose.set('strictQuery', false)
const PORT = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
const start = async () => { 
    try {
        await mongoose.connect(`mongodb+srv://Ashwani:112345678901@productcluster.3wdobiq.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => { 
            console.log("connected to db")
        });
        app.listen(PORT, async () => { 
            
            console.log(`listening at port 4000`);
        })
    } catch (error) { 
        console.log(error.message);
    }
}
start();
app.use("/", async (req,res) => { 
    try {
        const products = await Product.find({});
        res.send({products})
    } catch (error) { 
        res.send({"message":"error is occuring"})
    }
})

