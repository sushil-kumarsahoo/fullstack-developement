import { useState } from 'react'
import './App.css'


let counter = 0;

function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:"Learn React",
    description:"Learn React from scratch",
  },
  {
    id:2,
    title:"Learn React",
    description:"Learn React from scratch",
  },
  {
    id:3,
    title:"Learn React",
    description:"Learn React from scratch",
  }
])

function addTodo(){


  setTodos([...todos, {
    id:counter++,
    title:"adding another todo",
    description:"adding another todo"
  }])


  // const newTodos = [];
  // for(let i=0; i<todos.length; i++){
  //    newTodos.push(todos[i]);
  // }
  // newTodos.push({
  //   id:4,
  //   title:Math.random(),
  //   description:Math.random()
  // })
  // setTodos(newTodos)
}

  return (
   <div> 
    <button onClick={addTodo}>
      Add todo
    </button>
     {todos.map(function(todo){
      return <Todo key={todo.id} title={todo.title} description={todo.description}/>
     })}
   </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App
