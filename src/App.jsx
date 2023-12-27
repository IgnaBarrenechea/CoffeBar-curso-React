import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import TipoDeCafe1 from './components/TipoDeCafe1'
import TipoDeCafe2 from './components/TipoDeCafe2'
import TipoDeCafe3 from './components/TipoDeCafe3'

const App = () => {
  return (
    <BrowserRouter>
      
      <NavBar/>

      <Routes>
      
        <Route path="/tipo-de-cafe-1" component={TipoDeCafe1} />
        <Route path="/tipo-de-cafe-2" component={TipoDeCafe2} />
        <Route path="/tipo-de-cafe-3" component={TipoDeCafe3} />
        
        
          
      </Routes>
      <ItemListContainer greeting={"Bienvido a Coffe-Bar"} />
      
    </BrowserRouter>
  )
}

export default App
