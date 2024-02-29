const { configDotenv } = require('dotenv');
const app = require('./app.js');
const connectDatabase = require('./config/database.js');


configDotenv({ path: ".env" });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log("server is running on:", process.env.PORT);
})