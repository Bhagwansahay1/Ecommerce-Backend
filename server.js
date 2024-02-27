import { configDotenv } from 'dotenv';
import app from './app.js';
import connectDatabase from './config/database.js';


configDotenv({ path: ".env" });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log("server is running on:", process.env.PORT);
})