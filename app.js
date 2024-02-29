const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const user = require('./routes/userRoute.js');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v1", user);

module.exports = app;