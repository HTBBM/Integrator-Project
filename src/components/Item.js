import { Link } from "react-router-dom";

import styles from "./Item.module.css";

export default function Item({ name, to, config, status }) {

    if(!name && name !== ""){
        if (status === true){
            name = "Ligado"
        }else{
            name = "Desligado"
        }
    }
    
    let statusClass = "";
    switch (status) {
        case true:
            statusClass = styles.online;
            break;
        default:
            statusClass = styles.offline;
            break;
    }
    if (config) {
        return (
            <div className={`${styles.div_wrapperVent} ${statusClass}`} to={to}>
                <h1>{name}</h1>
            </div>
        );
    } else {
        return (
            <Link className={styles.div_wrapper} to={to}>
                <h1>{name}</h1>
            </Link>
        );
    }
}
