import Item from "../Item";

import axios from "axios";

import styles from "./Eletro.module.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Eletro2() {



  const [statusVent, setStatusVent] = useState(true);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",

    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function getVent() {
      try {


        const response = await axios.get(`http://192.168.0.23/dashboard/eletro2`, axiosConfig);


        const statusVent = response.status;

        console.log(statusVent);
        setStatusVent(statusVent);



        console.log(response.data)


      } catch (error) {
        console.error(error);
      }

    }
    getVent();
  }, []);

  function handleVent(status) {
    console.log({
      status
    });

    sendPost(status);
  }

  async function sendPost(status) {
    const post = {
      "var1": status
    };

    try {
      await axios.post(
        "http://192.168.0.23/dashboard/eletro2",
        post,
        axiosConfig,
      );
      console.log("Post Enviado!");
      navigate('/dashboard')

    } catch (error) {
      console.error("Error ao enviar post:", error);
    }

  }

  return (
    <div className={styles.dashboard}>
      <div onClick={() => handleVent(!statusVent)}>
        <Item config={true} status={statusVent} />
      </div>
    </div>
  );
}