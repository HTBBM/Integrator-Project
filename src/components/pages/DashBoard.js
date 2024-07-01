import Item from "../Item";
import styles from './DashBoard.module.css'

export default function DashBoard(){
    return(
        <div className={styles.dashboard}>
            <Item name={"3° Eletro"} to={"/login"}/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}