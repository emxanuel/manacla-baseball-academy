import styles from '../css/elegibleModal.module.css'
import { Link } from 'react-router-dom'
import { ocultNavbarMenu, scrollZero, toggleShowElement } from '../functions/elements';

const ElegibleModal = () => {
    const toggle = () => {
        const element = document.getElementsByClassName(styles.container) as HTMLCollectionOf<HTMLElement>;
        toggleShowElement(element[0], styles)
    }
    return (
        <div className={`${styles.container} ${styles.hidden} ${styles.notShow}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Elegibles</h1>
                    <button onClick={toggle}><i className='fa-solid fa-x' /></button>
                </div>
                <div className={styles.links} onClick={() => {
                    toggle();
                    scrollZero();
                    ocultNavbarMenu()
                }}>
                    <Link to='/players/2024'>2024</Link>
                    <Link to='/players/2025'>2025</Link>
                    <Link to='/players/2026'>2026</Link>
                    <Link to='/players/2027'>2027</Link>
                    <Link to='/players/2028'>2028</Link>
                </div>
            </div>
        </div>
    )
}

export default ElegibleModal