import { useMemo, useState } from 'react'

import './App.css'

function App() {
 const[counter,setCounter] = useState(0);
 const [inputValue, setInputValue] = useState(1);

 const sum = useMemo(() => {
  let count = 0;
 for(let i=0;i<=inputValue;i++){
  count = count + i;
 }
 return count;
 },[inputValue]);
 

  return (
     <div>
      <input
      onChange={function(e){
        setInputValue(e.target.value);
      }} type="text" placeholder='find sum from 1 to n' />
      <br />
      sum is {inputValue} is {sum};
      <br />
      <button onClick={()=> {
        setCounter(counter + 1);
      }}>Counter {counter}</button>
     </div>
  )
}

export default App
