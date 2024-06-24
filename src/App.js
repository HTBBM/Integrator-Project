import './App.css'

import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import NavBar from './components/NavBar'
import Container from './components/layout/Container'

export default function App(){
  return(
    <Router>
    <div>
      
      <NavBar/>
    </div>
    <Container customClass=".min-height">
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

    </Routes>
    </Container>
    <p>Footer</p>
    </Router>

  )
}