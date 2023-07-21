import styles from '../css/about.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <h1>Sobre nosotros</h1>
            <div className={styles.information}>
                <p>
                Somos un equipo de profesionales dispuestos a contribuir con el desarrollo 
                de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, 
                convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales.
                </p>
            </div>
            <div className={styles.decoration}></div>
        </div>
    )
}

export default About