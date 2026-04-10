
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

    const handleOnline = () => {setIsOnline(true);}
    const handleOffline = () => {setIsOnline(false);}

    window.addEventListener("online",
     handleOnline)
    window.addEventListener("offline",
      handleOffline
    )

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
   
  }, [])
  return isOnline 
}

export default App
