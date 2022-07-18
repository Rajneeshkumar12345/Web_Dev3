const express = require('express');

const userModel = require('./userModel');

const app = express();
app.listen(3000, function () {
    console.log("server started at port 3000")
})
