const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req,res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(411).json({
        message: "you sent the wrong inputs",
    })
    return;
}
await todo.create({
    title:createPayload.title,
    description:createPayload.description, 
    completed:false
})

res.json({
    msg: "todo created successfully",
})
})

app.get("/todos", async function(req,res){
   const todos = await todo.find({});
    
   res.json({
    todos
   })
})

app.put("/completed", async function(req, res){
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg: "you sent wrong inputs",
    })
    return;
  }
  await todo.updateOne({
    _id: req.body.id
  }
    
,{
completed:true
  })
  res.json({
    msg: "Todo marked as completed"
  })
}) 

app.get("/todo/:id", async function(req,res){
  const id = req.params.id;

  const Foundtodo = await todo.findById(id);

  if(!Foundtodo){
    return res.status(404).json({
      msg:"todo not found"
    });
  }
  res.json({
    todo: Foundtodo
  })
})

app.listen(3000);