import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function Detail(){
    const params = useParams();
    const id = params.detailId;
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

//Name
//Status
//Specie
//Genrer
//Origin
//Image

    return (
        <div>
            <h3>{`Nombre: ${character.name}`}</h3>
            <h3>{`Status: ${character.status}`}</h3>
            <h3>{`Specie: ${character.species}`}</h3>
            <h3>{`Gender: ${character.gender}`}</h3>
            <img src={character.image} alt={character.name} />
            <br/>
            <Link to="/home">Wooba Loobaa dub dub</Link>
        </div>
    )
}