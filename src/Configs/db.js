const mongoose = require("mongoose");

const connect = (Uri) => { 
    return mongoose.connect(Uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
}
module.exports = connect;