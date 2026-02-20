
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const isOnline = useIsOnline();

  return (
   <div>
       {isOnline ? "you are online" : "you are offline"}
   </div>
  )
}

function useIsOnline(){
  const [isOnline,setIsOnline] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener("online", () => {
     setIsOnline(true);
    })
    window.addEventListener("offline", ()=>{
      setIsOnline(false);
    })
   
  }, [])
  return isOnline 
}

export default App
