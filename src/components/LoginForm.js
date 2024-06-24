
import styles from './LoginForm.module.css'

export default function LoginForm(){
    return(
            <div>
             <form className={styles.LoginForm}>
                <h1>Digite seu dados</h1>
                <hr></hr>
                <div>
                <div>
                    <label htmlFor="user">User:</label>
                    <br></br>
                    <input className={styles.input_text} type="text" name="user"/>
                 </div>
                 <div>
                    <label htmlFor="password">Senha:</label>
                    <br></br>
                    <input className={styles.input_text} type="password" name="password"/>
                 </div>
                 <div className={styles.div_button}>
                 <input input className={styles.input_button} type='submit' value="Enviar"/>
                 </div>
                 </div>
             </form>
            </div>

    )
}