import './App.css'
import React, {useState, useEffect} from "react"
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Inicio from "./components/Inicio/inicio.jsx"
import Favorites from './components/Favorites/Favorites.jsx'


function App () {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const username = 'luis@gmail.com';
  const password = '1password';
  const navigate = useNavigate();
  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

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

  const location = useLocation();

  return (
    <div className='App' >
      {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
     <Routes>
        <Route path='/' element={<Inicio login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:detailId' element={<Detail />} />
     </Routes>   
    </div>
  )
}






export default App
