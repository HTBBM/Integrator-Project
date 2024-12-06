
import { useState } from "react";
import styles from "./Timer.module.css";

export default function Timer(){


  const [turnOnTime, setTurnOnTime] = useState('');
  const [turnOffTime, setTurnOffTime] = useState('');

  function submitTimerForm(e){
    e.preventDefault()
    console.log(turnOnTime)
    console.log(turnOffTime)
  }

   return (
      <>
      <form className={styles.LoginForm} onSubmit={submitTimerForm}>
          <div className={styles.container}>
              <h3>Digite o horário que deverá ser <span className={styles.ligado}>ligado</span> os vetiladores</h3>
              <input type="time" id="timerStart" name="timerStart" onChange={(e) => setTurnOnTime(e.target.value)} required/>
          </div>
          <div className={styles.container}>
              <h3>Digite o horário que deverá ser <span className={styles.desligado}>desligado</span> os vetiladores</h3>
              <input type="time" id="timerEnd" name="timerEnd"  onChange={(e) => setTurnOffTime(e.target.value)}  required />
          </div>
          <button className={styles.submitBtn}>Salvar</button>
        </form>
      </>
   )
}            


