import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Nav/Navbar'
import Puppy from './components/Puppy.jsx/Puppy'
import Search from './components/Search/Search'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/puppy" element={<Puppy/>}/>      
        <Route path="/search" element={<Search/>}/>    
      </Routes>
    </div>
  )
}

export default App
