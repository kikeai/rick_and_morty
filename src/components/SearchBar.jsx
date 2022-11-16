import React, {useState} from "react"
import styles from "./searcBar.module.css"


export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   return (
      <form onSubmit={(e) => {
         e.preventDefault();
         onSearch(character);
         setCharacter("")
      }}>
         <input className={styles.entrada} type='search' value={character} onChange={e => setCharacter(e.target.value)} placeholder="search"/>
         <button className={styles.boton} type='submit'>Agregar</button>
      </form>
   );
}
