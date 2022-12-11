import Card from '../Card/Card.jsx';
import styles from './cartas.module.css'
import { useDispatch } from "react-redux"
import * as actions from "../../redux/actions.js"

export default function Cards(props) {
   const dispatch = useDispatch()
   const { characters } = props;
   if(characters.length < 1) return;
   else{
      dispatch(actions.filterCards('All'))
      return <div className={styles.carta}>
      {
         characters.map((c) => <Card name={c.name}
         species={c.species}
         gender={c.gender}
         image={c.image}
         id={c.id}
         key={c.id}
         onClose={()=> props.onClose(c.id)}/>)
      }
   </div>;

   }
}
