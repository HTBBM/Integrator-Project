import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className={styles.nicenav}>
            <Link className={styles.itemnav} to='/dashboard'>Dashboard</Link>
            <Link className={styles.itemnav} to='/login'>Login</Link>
        </div>
    )
}