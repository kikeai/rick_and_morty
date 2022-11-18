import styles from './cartas.module.css'
import {Link} from "react-router-dom"

function genero(props){
   if(props.gender === "Male") {
      return styles.male;
   }else{
      return styles.female;
   }
}

function especie(props){
   if(props.species === "Human") {
      return styles.human;
   }else{
      return styles.alien;
   }
}

export default function Card(props) {
   return (
      <div className={styles.slide}>
         <button className={styles.remove} onClick={props.onClose}>X</button>
         <img className={styles.img} src={props.image} alt="" />
         <Link to={`/detail/${props.tid}`}>
            <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <div className={styles.detail}>
            <h2 className={especie(props)}>{props.species}</h2>
            <h2 className={genero(props)}>{props.gender}</h2>
         </div>
      </div>
   );
}
