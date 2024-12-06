import Item from "../Item";
import styles from "./DashBoard.module.css";

export default function DashBoard() {
    return (
        <div className={styles.dashboard}>
            <Item name={"2° Eletro"} to={"/dashboard/eletro2"} />
            <Item name={" "}/>
            <Item name={" "}/>
            <Item name={" "}/>
        </div>
    );
}
