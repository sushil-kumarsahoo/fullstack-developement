 
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'
import { useEffect, useState } from 'react'

function App() {

const[todos, setTodos] = useState([]);
const[selectTodo, setSelectTodo] = useState(null);

useEffect( ()=> {
  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })
}, [])

const handleTodoClick = async (id) => {
  const res =await fetch(`http://localhost:3000/todo/${id}`);
  const json = await res.json();
  setSelectTodo(json.todo);
}

if(selectTodo){
  return <div>
    <button onClick={() => setSelectTodo(null)}>Back to Todos</button>
    <h1>{selectTodo.title}</h1>
    <h4>{selectTodo.description}</h4>
  </div>
}

  return (
   <div>
    <CreateTodo setTodos={setTodos}/>
    <Todos todos={todos} setTodos={setTodos} onTodoClick={handleTodoClick}/>
   </div>
  )
}

export default App
