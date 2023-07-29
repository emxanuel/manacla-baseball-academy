import styles from '../css/trajectory.module.css'
import image from '../assets/images/TRAYECTORIA-min.svg'
import { selectedPage } from '../functions/elements'
import { useEffect } from 'react'
import Members from '../components/Members'

const Trajectory = () => {
    useEffect(() => {
        selectedPage('trajectory')
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.secondDiv}>
                <div className={styles.imgContainer}>
                    <img src={image} alt="Imagen de trayectoria" />
                </div>
                <Members />
            </div>
        </div>
    )
}

export default Trajectory