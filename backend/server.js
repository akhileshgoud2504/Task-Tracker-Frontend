const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const taskRoutes = require("./route/taskroute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
// app.use(cors({
//     origin:["http://localhost:3000/"]
// }))
app.use("/api/tasks",taskRoutes);


const PORT = process.env.PORT || 5000;

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



