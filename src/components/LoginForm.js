import styles from './LoginForm.module.css'
import { useContext, useState } from 'react'

import { AuthContext } from './utils/AuthContext'; // Certifique-se de ajustar o caminho corretamente

import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {

    const navigate = useNavigate(); // Inicializa useNavigate

    const { setAuth } = useContext(AuthContext);

    let axiosConfig = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",

        },
    }


    async function getUser(usr, pass) {
        try {
            const response = await axios.get(`http://192.168.0.23/login?var1=${usr}&var2=${pass}`, axiosConfig);

            console.log(response.data.login_s)

            if (response.data.login_s === "true") {
                console.log("logando")
                setAuth({ token: true });  // Atualiza o token no contexto
                navigate('/dashboard');  // Redireciona para o DashBoard
            }
            else {
                console.log("vishhh...")
                setAuth({ token: false });  // Atualiza o token no contexto
            }

        } catch (error) {
            console.error(error);
        }
    }

    const [user, setUser] = useState('')

    const [password, setPassword] = useState('')

    function sendLogin(e) {
        e.preventDefault()
        console.log(user)
        console.log(password)
        getUser(user, password);

    }

    return (
        <div>
            <form className={styles.LoginForm} onSubmit={sendLogin}>
                <h1>Digite seu dados</h1>
                <hr></hr>
                <div>
                    <div>
                        <label className={styles.input_label} htmlFor="user">User:</label>

                        <input
                            className={styles.input_text}
                            type="text"
                            name="user"
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className={styles.input_label} htmlFor="password">Senha:</label>

                        <input
                            className={styles.input_text}
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.div_button}>
                        <input input className={styles.input_button} type='submit' value="Enviar" />
                    </div>
                </div>
            </form>
        </div>

    )
}