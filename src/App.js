import './App.css'

import {BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from './components/NavBar'

export default function App(){
  return(
    <Router>
    <div>
      
      <NavBar/>
    </div>

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

    </Routes>

    </Router>

  )
}