const express = require("express");
const Task = require("../model/taskmodel");
const route = express.Router();

route.post("/api/tasks", async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
})

route.get("/api/tasks", async (req,res)=>{
    try{
        const task = await Task.find();
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
})

module.exports = route;