import styles from '../css/elegibleMenu.module.css'

const ElegibleMenu = () => {
    return (
        <div className={`${styles.notShow} ${styles.hidden} ${styles.container}`}>
            <p>Eleccion</p>
            <p>Eleccion</p>
            <p>Eleccion</p>
            <p>Eleccion</p>
            <p>Eleccion</p>
        </div>
    )
}

export default ElegibleMenu