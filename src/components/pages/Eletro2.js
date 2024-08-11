import Item from "../Item";
import { useState } from "react";
import axios from "axios";

import styles from "./Eletro.module.css";

export default function Eletro2() {
  const [vent, setVent] = useState();
  const [status, setStatus] = useState();

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Acess-Control-Allow-Origin": "*",
    },
  };

  function handleVent() {
    console.log({
      vent,
      status,
    });

    sendPost(vent, status);
  }

  async function sendPost(vent, status) {
    const post = {
      vent,
      status,
    };

    try {
      await axios.post(
        "https://45af37b1-3ead-4d72-b2d1-f81c4bd27e46-00-h1qa30kpjlfd.kirk.replit.dev:8080/",
        post,
        axiosConfig,
      );
      console.log("Post Enviado!");
    } catch (error) {
      console.error("Error ao enviar post:", error);
    }
  }

  return (
    <div className={styles.dashboard}>
      <Item
        config={true}
        onClik={() => {
          setVent(1);
          setStatus(false);
          handleVent();
        }}
        s
      />
      <Item config={true} />
      <Item config={true} status={true} />
      <Item config={true} />
    </div>
  );
}
