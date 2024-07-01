import './App.css'


import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import NavBar from './components/NavBar'
import Container from './components/layout/Container'
import DashBoard from './components/pages/DashBoard'
import Footer from './components/layout/Footer'

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
        <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
    </Container>
      <Footer/>
    </Router>

  )
}