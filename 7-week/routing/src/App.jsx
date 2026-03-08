import './App.css'
import React, { Suspense } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

const DashBoard = React.lazy(() => import("./components/Dashboard"));

const Landing = React.lazy(() => import('./components/Landing'))

function App() { 
  return (
   <div>
   
    <BrowserRouter>
    <Appbar/>
   <Routes>
    <Route path='/dashboard' element={<Suspense fallback={<div>Loading...</div>}>
      <DashBoard/>
    </Suspense>}/>
    <Route path='/' element={<Suspense fallback={<div>Loading...</div>}>
      <Landing/>
    </Suspense>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
return  <div>
      <button onClick={()=>{
        navigate("/");
      }}>Landing page</button> 
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button> 
    </div>
}

export default App
