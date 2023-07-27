import { Fade, JackInTheBox } from 'react-awesome-reveal'
import styles from '../css/footer.module.css'
import { selectedPage } from '../functions/elements'
import { useEffect } from 'react'
const Footer = () => {
    useEffect(selectedPage)
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <JackInTheBox triggerOnce ><h3>Contáctanos</h3></JackInTheBox>
                <Fade triggerOnce >
                    <div className={styles.content}>
                        <a href="https://wa.me/+18296490757"><i className={`fa-brands fa-whatsapp ${styles.whatsapp}`} />
                            (829) 649-0757</a>
                        <a href="https://instagram.com/manaclabaseballacademy" target='_blank'><i className={`fa-brands fa-instagram ${styles.instagram}`} />
                            @manaclabaseballacademy</a>
                    </div>
                </Fade>
            </div>
            <div className={styles.location}>
                <JackInTheBox triggerOnce ><h3>Ubicación</h3></JackInTheBox>
                <Fade triggerOnce>
                    <div className={styles.content}>
                        <p><i className={`fa-solid fa-location-dot ${styles.pin}`} />Santo Domingo, República Dominicana</p>
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