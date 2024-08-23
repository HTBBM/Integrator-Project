import Item from "../Item";

import axios from "axios";

import styles from "./Eletro.module.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Eletro2() {



  const [statusArray, setStatusArray] = useState([true, true, true, true]);

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


        const newStatusArray = [
          response.data.vent_status_1,
          response.data.vent_status_2,
          response.data.vent_status_3,
          response.data.vent_status_4,
        ];

        console.log(newStatusArray);
        setStatusArray(newStatusArray);



        console.log(response.data)


      } catch (error) {
        console.error(error);
      }

    }
    getVent();
  }, []);

  function handleVent(vent, status) {
    console.log({
      vent,
      status,
    });

    sendPost(vent, status);
  }

  async function sendPost(vent, status) {
    const post = {
      "var1": vent,
      "var2": status
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
      <div onClick={() => handleVent(0, !statusArray[0])}>
        <Item config={true} status={statusArray[0]} />
      </div>
      <div onClick={() => handleVent(1, !statusArray[1])}>
        <Item config={true} status={statusArray[1]} />
      </div>
      <div onClick={() => handleVent(2, !statusArray[2])}>
        <Item config={true} status={statusArray[2]} />
      </div>
      <div onClick={() => handleVent(3, !statusArray[3])}>
        <Item config={true} status={statusArray[3]} />
      </div>
    </div>
  );
}