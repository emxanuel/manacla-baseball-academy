import styles from '../css/about.module.css'
import { selectedPage } from '../functions/elements'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        selectedPage('about')
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.media}>
                <img src="" alt="Imagen Sobre Nosotros" />
            </div>
            <div className={styles.information}>
                <p>
                Somos un equipo de profesionales dispuestos a contribuir con el desarrollo 
                de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, 
                convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales.
                </p>
            </div>
        </div>
    )
}

export default About