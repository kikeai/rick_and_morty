import SearchBar from "./SearchBar.jsx";
import styles from "./nav.module.css"
import logo from "./img/logo-rick-and-morty.png"

export default function Nav(props){
    return (
        <nav className={styles.navBar}>
            <div><img className={styles.foto} src={logo} alt="logo"></img></div>
            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}