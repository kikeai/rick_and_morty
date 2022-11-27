import { Link } from "react-router-dom";
import kike from "../img/para-presentacion.png"
import logo from "../img/logo-kike.png"
import instagram from "../img/logo-instagram.png"
import twitter from "../img/logo-twitter.png"
import github from "../img/logo-github.png"
import linkedin from "../img/logo-linkedin.png"
import styles from "./about.module.css"

export default function About(){
    return (
        <div className={styles.page}>
            <div className={styles.text}>
                <h3 className={styles.title}>¡HOLA SOY KIKE!</h3>
                <p className={styles.parrafo}>Me llamo Luis Garcia pero me dicen kike y soy de Venezuela, tengo 19 años y soy Developer web junior con conocimientos en JavaScript, HTML, CSS, React.js, Redux, node.js y varias tecnologias más entre frontend y backend, además soy diseñador gráfico con experiencia en branding y diseño para RRSS.</p>
                <Link className={styles.home} to="/home">/home</Link>
            </div>

            <div className={styles.image}>
                <img className={styles.img} src={kike} alt="Luis Garcia" />
            </div>

            <div className={styles.containerRedes}>
                <a href="https://instagram.com/kike.ai" target="_blank" rel="noreferrer"><img className={styles.redes} src={instagram} alt="instagram" /></a>
                <a href="https://twitter.com/KIKEill" target="_blank" rel="noreferrer"><img className={styles.redes} src={twitter} alt="twitter" /></a>
                <a href="https://github.com/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={github} alt="github" /></a>
                <a href="https://linkedin.com/in/kikeai" target="_blank" rel="noreferrer"><img className={styles.redes} src={linkedin} alt="linkedin" /></a>
            </div>

            <div className={styles.containerLogo}>
                <img className={styles.logo} src={logo} alt="Logo Kike" />
            </div>

        </div>
    )
}