import './App.css'
import React, {useState} from "react"
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import characters from "./data"
//import SearchBar from './components/SearchBar.jsx'
import Nav from './components/Nav'


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
      <Cards characters={characters} onClose={onClose}/>  
    </div>
  )
}






export default App
