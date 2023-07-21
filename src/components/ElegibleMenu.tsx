import styles from '../css/elegibleMenu.module.css'
import { Link } from 'react-router-dom'
import { scrollZero } from '../functions/elements'

const ElegibleMenu = () => {
    return (
        <div className={`${styles.notShow} ${styles.hidden} ${styles.container}`} onClick={scrollZero}>
            <Link to={`/players/${2024}`}>2024</Link >
            <Link to={`/players/${2025}`}>2025</Link >
            <Link to={`/players/${2026}`}>2026</Link >
            <Link to={`/players/${2027}`}>2027</Link >
            <Link to={`/players/${2028}`}>2028</Link >
        </div>
    )
}

export default ElegibleMenu