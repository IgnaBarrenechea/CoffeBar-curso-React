import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvido a Coffe-Bar"} />
    </div>
  )
}

export default App