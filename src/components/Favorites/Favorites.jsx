import { connect } from "react-redux"
import styles from "./Favorites.module.css"

function Favorites({ myFavorites }){
    return (
        <div className={styles.carta}>
            {
                myFavorites.length? myFavorites.map(e => (
                    <div className={styles.slide}>
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