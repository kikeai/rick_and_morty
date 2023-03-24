import styles from "./form.module.css"
import { useState } from "react"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwortRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

function validate(inputs){
    const errors = {};

    if (!emailRegex.test(inputs.username)) {
        errors.username = "*Debe ser un correo electrónico"
    } else if(!passwortRegex.test(inputs.password)){
        errors.password = "*Mínimo 6 caracteres"
    }
   
   return errors;
}


export default function Form({login}){
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    function handleChange(e) {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        });
        setErrors(
          validate({
             ...userData,
             [e.target.name]: e.target.value,
          })
       );
      }
    
    function handleSubmit(){
        login(userData);
    }

    function datos(e){
        e.preventDefault()
        window.alert("/Username: luis@gmail.com/ || /Password: 1password/")
    }

    return (
        <div>
            <form className={styles.formContainer}
            onSubmit={handleSubmit}>
        <h1>Inicia Sesión</h1>
        <p>Datos para ingresar:<br/>Email: luis@gmail.com<br/>password: 1password</p>
        
        <div className={styles.formGroup}>
            <input type="text" name="username" className={styles.formInputOk} value={userData.username} onChange={handleChange} placeholder=" " autoComplete="off" />
            <label className={styles.formLabel}>UserName</label>
            <span className={styles.formLine}></span>
            { errors.username? <p className={styles.errorMessage}>{errors.username}</p>: null }
        </div>
        
        <div className={styles.formGroup}>
            <input type="password" name="password" className={styles.formInputOk} value={userData.password} onChange={handleChange} placeholder=" " autoComplete="off" />
            <label for="password" className={styles.formLabel}>Password</label>
            <span className={styles.formLine}></span>
            { errors.password? <p className={styles.errorMessage}>{errors.password}</p>: null }
        </div>

        <button type="onSubmit" className={styles.boton}>Entrar</button>
    </form>
        </div>
    )
}
