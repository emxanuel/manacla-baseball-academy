import { Fade, JackInTheBox } from 'react-awesome-reveal'
import styles from '../css/footer.module.css'
import { selectedPage } from '../functions/elements'
import { useEffect } from 'react'
const Footer = () => {
    useEffect(selectedPage, [])
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <JackInTheBox triggerOnce ><h3>Contáctanos</h3></JackInTheBox>
                <Fade triggerOnce >
                    <div className={styles.content}>
                        <a href=""><i className={`fa-brands fa-whatsapp ${styles.whatsapp}`} />
                        (809)-000-0000</a>
                        <a href=""><i className={`fa-brands fa-instagram ${styles.instagram}`} />
                        @rabaseball</a>
                    </div>
                </Fade>
            </div>
            <div className={styles.location}>
                <JackInTheBox triggerOnce ><h3>Ubicación</h3></JackInTheBox>
                <Fade triggerOnce>
                    <div className={styles.content}>
                        <a href=""><i className={`fa-solid fa-location-dot ${styles.pin}`} />Calle, Ciudad, Pais</a>
                    </div>
                </Fade>
            </div>
            <div className={styles.quickAccess}>
                <JackInTheBox triggerOnce ><h3>Acceso Rápido</h3></JackInTheBox>
                <Fade triggerOnce >
                    <div className={styles.content}>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/about">Quienes Somos</a></li>
                            <li><a href="/trajectory">Trayectoria</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}

export default Footer