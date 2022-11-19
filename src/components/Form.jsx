import styles from "./form.module.css"
import { useState } from "react"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwortRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6, 10}$/;

function validate(inputs){
    const errors = {};

    if (!emailRegex.test(inputs.username)) {
        errors.username = "Debe ser un correo electronico"
    } if(!passwortRegex.test(inputs.password)){
        errors.password = "Almenos un numero y un largo de 6 a 10 caracteres"
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
             ...errors,
             [e.target.name]: e.target.value,
          })
       );
      }
    
    function handleSubmit(){
        login(userData);
    }

    return (
        <div>
            <form className={styles.formContainer}
            onSubmit={handleSubmit}>
        <h1>Inicia Sesión</h1>
        <p>¿No tienes una cuenta? <a href="/">Ingresa aquí</a></p>
        
        <div className={styles.formGroup}>
            <input type="text" name="username" className={errors.username? styles.formInputWarning: styles.formInputOk} value={userData.username} onChange={handleChange} placeholder=" " autoComplete="off" />
            <label for="user" className={styles.formLabel}>UserName</label>
            <span className={styles.formLine}></span>
        </div>
        
        <div className={styles.formGroup}>
            <input type="password" name="password" className={errors.password? styles.formInputWarning: styles.formInputOk} value={userData.password} onChange={handleChange} placeholder=" " autoComplete="off" />
            <label for="password" className={styles.formLabel}>Password</label>
            <span className={styles.formLine}></span>
        </div>

        <button type="onSubmit" className={styles.boton}>Entrar</button>
    </form>
        </div>
    )
}