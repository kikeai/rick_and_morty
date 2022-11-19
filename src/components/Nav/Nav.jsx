import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import styles from "./nav.module.css"
import logo from "../img/logo-rick-and-morty.png"

export default function Nav(props){
    return (
        <nav className={styles.navBar}>
            <div><Link to="/home" className={styles.decorationLink}><img className={styles.foto} src={logo} alt="logo" /></Link></div>
            <Link to="/about" className={styles.sobremi}>Creador</Link>

            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}