import express, { json } from "express";
const app = express();

app.use(json());

app.use("/",()=>{
    console.log("run this status");
})

export default app;