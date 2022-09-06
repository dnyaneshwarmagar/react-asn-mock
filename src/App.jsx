import {  useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Nav/Navbar'
import Puppy from './components/Puppy.jsx/Puppy'
import Search from './components/Search/Search'

function App() {
  let [breed,setBreed]=useState("")
 
  return (
    <div className="App">
      <div>

      <Navbar/>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home setBreed={setBreed}/>}/>
        <Route path="/puppy" element={<Puppy breed={breed}/>}/>      
        <Route path="/search" element={<Search setBreed={setBreed}/> }/>    
      </Routes>
      </div>
     
    </div>
  )
}

export default App
