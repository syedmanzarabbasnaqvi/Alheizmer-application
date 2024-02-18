import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portal from './Page/Portal'
import SignUp from './Page/Signin'
import Login from './Page/Login'
import Navbar from './Compoenent/Navbar'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

  <Navbar/> 
  <Routes>
    <Route path='/' element={<Portal/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>

  </Routes>
      
  </BrowserRouter>
    </>
  )
}

export default App
