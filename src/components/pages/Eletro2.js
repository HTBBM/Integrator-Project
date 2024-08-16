import Item from "../Item";

import axios from "axios";

import styles from "./Eletro.module.css";

export default function Eletro2() {

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",

    },
  };

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
        "http://192.168.0.23/",
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
      <div onClick={() => handleVent(1, false)}
      > <Item config={true} /></div>
      <div onClick={() => console.log("2")}
      > <Item config={true} /></div>
      <div onClick={() => console.log("3")}
      > <Item config={true} status={true} /></div>
      <div onClick={() => console.log("4")}
      > <Item config={true} /></div>

    </div>
  );
}
