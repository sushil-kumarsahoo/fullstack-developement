 const mongoose = require("mongoose");

 mongoose.connect("mongodb+srv://sushilkumar:Sushils9@cluster0.tnacnax.mongodb.net/")

 const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
 })

 const todo = mongoose.model("todo", todoSchema);

 module.exports ={
    todo
 }