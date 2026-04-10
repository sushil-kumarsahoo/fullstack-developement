
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';


function useTodos(){
  const [todos, setTodos] = useState(0);

  useEffect(() => {
    fetch("")
    .then(res => res.json())
    .then(data => setTodos(data))
  })
  return todos;
}

function App() {
  const todos=useTodos();
     <div>
{todos}
     </div>
  
}

export default App
