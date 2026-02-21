import { useEffect, useState } from 'react'
import './App.css'


function useInterval(fn, timeout){
  useEffect(()=>{
  const id =  setInterval(()=>{
      fn()
    },timeout)

    return ()=>{
      clearInterval(id);
    }
  },[fn,timeout])
}

function App() {
  const [count,setCount] = useState(0);

  useInterval(()=>{
    setCount(c => c+1);
  },1000)

  return (
    <div>
       {count}
    </div>
  )
}

export default App
