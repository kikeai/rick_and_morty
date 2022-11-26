import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import styles from "./Favorites.module.css"
import * as actions from "../../redux/actions.js"

function Favorites({ myFavorites }){
    const dispatch = useDispatch()
    function handleClick(e){
        const {name, value} = e.target
        switch (name) {
            case "order":
                return dispatch(actions.orderCards(value))
            case "filter":
                return dispatch(actions.filterCards(value))
            default:
                break;
        }
    }
    
    return (
        <div className={styles.carta}>
            <div className={styles.selects}>
                <select className={styles.option} name="order" onClick={handleClick}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select className={styles.option} name="filter" onClick={handleClick}>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {
                myFavorites.length? myFavorites.map((e, i) => (
                    <div className={styles.slide} key={i}>
                        <img className={styles.img} src={e.image} alt={e.name} />
                        <h3 className={styles.name} >{e.name}</h3>
                    </div>
                )): null
            }
        </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)