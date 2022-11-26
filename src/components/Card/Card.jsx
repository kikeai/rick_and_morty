/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../Cards/cartas.module.css'
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addFavorite, deleteFavorite} from "../../redux/actions"

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

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id)
      }else {
         setIsFav(true);
         props.addFavorite(props)
      }
   }
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleDelete(){
      setIsFav(false);
      props.deleteFavorite(props.id)
      return props.onClose()
   }
   
   return (
      <div className={styles.slide}>
         {
            isFav ? ( <button className={styles.favorite} onClick={handleFavorite}>❤️</button>):
            ( <button className={styles.favorite} onClick={handleFavorite}>🤍</button> )
         }
         <button className={styles.remove} onClick={handleDelete}>X</button>
         <img className={styles.img} src={props.image} alt="" />
         <Link to={`/detail/${props.id}`} className={styles.link}>
            <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <div className={styles.detail}>
            <h2 className={especie(props)}>{props.species}</h2>
            <h2 className={genero(props)}>{props.gender}</h2>
         </div>
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: (personaje) => dispatch(addFavorite(personaje)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);