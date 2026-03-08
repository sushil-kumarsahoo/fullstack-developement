import {useRecoilValue, RecoilRoot } from "recoil"
import './App.css'
import { todosAtomFamily } from "./atoms";

function App() {
  

  return (
   <>
   <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
   </RecoilRoot>
   </>
  )
}
function Todo({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
    {currentTodo.title}
    {currentTodo.description}
    <br/>
    </>
  )
}

export default App
