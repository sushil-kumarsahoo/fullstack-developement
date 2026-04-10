
import { memo, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

const inputFunction = useCallback(()=>{
    console.log("hii there");
    
},[])

  return (
    <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={()=>{
      setCount(count+1);

    }}>click me {count}</button>
    </div>
  )
}
   
const ButtonComponent = memo(({inputFunction}) => {
  console.log("child rendered");

  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})

export default App
