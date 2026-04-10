
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
const [inputValue,setInputValue] = useState('');
const debounceValue = useDebounce(inputValue, 5000);

useEffect(()=>{
  if(debounceValue){
    console.log("Api call", debounceValue);
    
  }
},[debounceValue])

  return (
    <div>
      debounced vaalue is {debounceValue}
       <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
       }} placeholder='Search...' />
    </div>
  )
}

function useDebounce(value,delay){
  const [debounceValue,setDebounceValue] = useState(value)

  useEffect( ()=>{
    const timer = setTimeout(()=>{
      setDebounceValue(value)
    },delay)
    return (()=> clearTimeout(timer))
  },[value,delay])
  return debounceValue;
}

export default App
