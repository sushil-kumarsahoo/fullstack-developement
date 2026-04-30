import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [socket,setSocket] = useState<null | WebSocket>(null);
const [latestMessages,setlatestMessages] = useState("");
const [message,setMessage] = useState("")
useEffect(()=>{
const socket = new WebSocket('ws://localhost:8080')
socket.onopen = () => {
  console.log('Connected');
  setSocket(socket)
}
socket.onmessage = (message) => {
  console.log('Received message:', message.data);
  setlatestMessages(message.data)
}

return () => {
  socket.close()
}
},[])

if(!socket){
  return <div>
    loading...
  </div>
}
  return (
   <div>
    <input onChange={(e)=>{
      setMessage(e.target.value)
    }}></input>
    <button onClick={() => {
      socket.send(message)
    }}>Send</button>
     {latestMessages}
   </div>
  )
}

export default App
