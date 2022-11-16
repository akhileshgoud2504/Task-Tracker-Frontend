const express = require("express");
const mongoose = require("mongoose");
const Task = require("./model/taskmodel");
const dotenv = require("dotenv").config();
const taskRoutes = require("./route/taskroute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(taskRoutes);


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



