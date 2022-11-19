import gif from "./img/gif.gif"
//import { Link } from "react-router-dom"
import styles from "./inicio.module.css"
import Form from "./Form"

export default function Inicio(props){
    return (
        <div className={styles.body}>
            <img src={gif} alt="gif"/>
            <Form login={props.login} />
        </div>
    )
}