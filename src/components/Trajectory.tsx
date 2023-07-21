import styles from '../css/trajectory.module.css'

const Trajectory = () => {
    return (
        <div className={styles.container}>
            <h1>Trayectoria</h1>
            <div className={styles.secondDiv}>
                <div className={styles.imgContainer}>
                    <img src="" alt="Imagen de trayectoria" />
                </div>
                <div className={styles.information}>
                    <p>Informacion</p>
                </div>
            </div>
            <div className={styles.decoration}></div>
        </div>
    )
}

export default Trajectory