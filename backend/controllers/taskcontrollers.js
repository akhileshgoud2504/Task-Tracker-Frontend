const express = require("express");
const Task = require("../model/taskmodel");
const route = express.Router();

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const getTasks = async (req,res)=>{
    try{
        const task = await Task.find();
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const getTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json(`Task dosen't exist with id: ${id}`)
        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const deleteTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json(`Task dosen't exist with id: ${id}`)
        }
        res.status(200).send("Task deleted");
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const updateTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {
                _id:id
            },
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if(!task){
            return res.status(404).json(`Task dosen't exist with id: ${id}`)
        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}