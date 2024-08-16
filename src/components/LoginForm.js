
import { Navigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

import { useState } from 'react'

import axios from "axios";


export default function LoginForm() {

    let axiosConfig = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",

        },
    }


    async function sendPost(user, pass) {
        const post = {
            "var1": user,
            "var2": pass
        };

        try {
            await axios.post(
                "http://192.168.0.23/login",
                post,
                axiosConfig,
            );
            console.log("Post Enviado!");
        } catch (error) {
            console.error("Error ao enviar post:", error);
        }
    }

    const [user, setUser] = useState()

    const [password, setPassword] = useState()

    function sendLogin(e) {
        e.preventDefault()
        console.log(user)
        console.log(password)
        sendPost(user, password);
        
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