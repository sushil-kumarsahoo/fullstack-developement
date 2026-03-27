import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'

function App(){

    return (        
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/blog' element={<Blog />}/>
       </Routes>
       </BrowserRouter>
    </>
    )
}

export default App