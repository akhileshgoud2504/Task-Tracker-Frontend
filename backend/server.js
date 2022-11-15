const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 2000;

mongoose
        .connect(process.env.MONGO_URI)
        .then(()=>{
            app.listen(PORT,()=>{
                console.log(`server running on port ${PORT}`);
            });
        })
        .catch((err)=>{
            console.log(err);
        })

//Routers

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to home page...</h1>");
})



