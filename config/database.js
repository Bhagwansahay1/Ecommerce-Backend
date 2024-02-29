const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log(`mongoDB connect with server: ${data.connection.host} `);
    }).catch(e=>{
        console.log(e,"error for why")
    })
}

module.exports = connectDatabase;