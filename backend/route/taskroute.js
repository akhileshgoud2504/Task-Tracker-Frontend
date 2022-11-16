const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskcontrollers");
const Task = require("../model/taskmodel");
const route = express.Router();

route.route("/").post(createTask).get(getTasks);
route.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


// route.post("/",createTask);
// route.get("/",getTasks);
// route.get("/:id",getTask);
// route.delete("/:id",deleteTask);
// route.put("/:id",updateTask);

module.exports = route;