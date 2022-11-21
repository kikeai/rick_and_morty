import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from "./detail.module.css"

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
        <div className={styles.page}>
            <div>
               <img className={styles.image} src={character.image} alt={character.name} />
            </div>
            <Link to="/home" className={styles.boton}>Back Home</Link>
            <div>
               <div className={styles.info}>
                  <div>
                     <h3 className={styles.name}>{`${character.name}`}</h3>
                  </div>
                  <div className={styles.details}>
                     <h3 className={styles.specification}>{`Status: ${character.status}`}</h3>
                     <h3 className={styles.specification}>{`Specie: ${character.species}`}</h3>
                     <h3 className={styles.specification}>{`Gender: ${character.gender}`}</h3>
                  </div>
               </div>
            </div>
        </div>
    )
}