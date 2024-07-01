

import { Link } from 'react-router-dom'

import styles from './Item.module.css'

export default function Item({name, to}) {

    

    return(
        <Link className={styles.div_wrapper} to={{to}}>
            <h1>
                {name}
            </h1>
        </Link> 
    )   
}