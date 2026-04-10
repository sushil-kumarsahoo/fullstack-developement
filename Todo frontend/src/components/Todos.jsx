export function Todos({todos,setTodos,onTodoClick}){
    return <div>
        {todos.map(function(todo){
            return <div key={todo._id}
            onClick={() => {onTodoClick(todo._id)}}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button 
                onClick={() => {
                      console.log("Sending id:", todo._id);
                 fetch("http://localhost:3000/completed", {
                        method:"PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers:{
                            "content-type":"application/json"
                        }
                    })
                    .then( () => {
                        setTodos(prev => prev.map(
                            t=> t._id === todo._id ?
                            {...t, completed: true} : t
                        ) )
                    });
                }}
                >{todo.completed == true ? "completed" : "mark as completed"}</button>
            </div>
        })}
    </div>
}
