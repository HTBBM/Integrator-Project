import Item from "../Item";

import axios from "axios";

import styles from "./Eletro.module.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Constants from "../IP";

export default function Eletro2() {



  const [statusVent, setStatusVent] = useState(true);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",

    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://${Constants.IP}/dashboard/eletro2`, {
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

        const statusVent = data.status;

        console.log(statusVent);
        setStatusVent(statusVent);


      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  function handleVent() {
    console.log(!statusVent);

    sendPostRequest();
  }

    const sendPostRequest = () => {
    const payload = {
      status: !statusVent,
    };

    fetch(`http://${Constants.IP}/dashboard/eletro2`, {
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

  return (
    <div className={styles.dashboard}>
      <div onClick={() => handleVent(!statusVent)}>
        <Item config={true} status={statusVent} />
      </div>
    </div>
  );
}