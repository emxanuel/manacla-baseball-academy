import styles from '../css/trajectory.module.css'
import image from '../assets/images/TRAYECTORIA-min.svg'

const Trajectory = () => {
    return (
        <div className={styles.container}>
            <div className={styles.secondDiv}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="Imagen de trayectoria" />
                </div>
            </div>
        </div>
    )
}

export default Trajectory