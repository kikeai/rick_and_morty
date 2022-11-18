import './App.css'
import React, {useState} from "react"
import {Routes, Route} from "react-router-dom"
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"


function App () {
  const [characters, setCharacters] = useState([])

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  function onClose(id){
    setCharacters(prevCharacters => prevCharacters.filter(c => c.id !== id));
  }


  return (
    <div className='App' >
     <Nav onSearch={onSearch}/>
     <Routes>
        <Route path='/' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
     </Routes>   
    </div>
  )
}






export default App
