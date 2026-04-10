import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import {Blog} from './pages/Blog'
import {Blogs} from './pages/Blogs'
import { Publish } from './pages/Publish'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App(){

    return (        
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>

        <Route element={<ProtectedRoute/>}>
         <Route path='/blog/:id' element={<Blog />}/>
        <Route path='/blogs' element={<Blogs/> }/>
        <Route path='/publish' element={<Publish />}/>
        </Route>
       </Routes>
       </BrowserRouter>
    </>
    )
}

export default App