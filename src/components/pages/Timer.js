
import { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import { useNavigate } from "react-router-dom";
import Constants from "../IP";


export default function Timer(){

  
  

  let navigate = useNavigate()

  const [turnOnTime, setTurnOnTime] = useState('');
  const [turnOffTime, setTurnOffTime] = useState('');
 
  useEffect(() => {
    fetch(`http://${Constants.IP}/timers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)

        setTurnOnTime(data.start)
        setTurnOffTime(data.end)


      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  const sendPostRequest = () => {
    const payload = {
      var1: turnOnTime,
      var2: turnOffTime,
    };

    fetch(`http://${Constants.IP}/timers/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Resposta recebida:", data);
        navigate("/dashboard")
      })
      .catch((error) => {
        console.error("Erro ao enviar a requisição POST:", error);
      });
  };



  function submitTimerForm(e){
    e.preventDefault()
    console.log(turnOnTime)
    console.log(turnOffTime)
    sendPostRequest()
  }

   return (
      <>
      <form className={styles.LoginForm} onSubmit={submitTimerForm}>
          <div className={styles.container}>
              <h3>Digite o horário que deverá ser <span className={styles.ligado}>ligado</span> os ventiladores</h3>
              <input type="time" id="timerStart" name="timerStart" 
              onChange={(e) => setTurnOnTime(e.target.value)} 
              required
              value={turnOnTime}
              />
          </div>
          <div className={styles.container}>
              <h3>Digite o horário que deverá ser <span className={styles.desligado}>desligado</span> os ventiladores</h3>
              <input type="time" id="timerEnd" name="timerEnd"  
              onChange={(e) => setTurnOffTime(e.target.value)} 
              required 
              value={turnOffTime}
              />
          </div>
          <button className={styles.submitBtn}>Salvar</button>
        </form>
      </>
   )
}            


