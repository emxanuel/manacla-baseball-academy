import { Fade, JackInTheBox } from 'react-awesome-reveal'
import styles from '../css/footer.module.css'
import { scrollZero, selectedPage } from '../functions/elements'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                        <ul onClick={scrollZero}>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/about">Quienes Somos</Link></li>
                            <li><Link to="/trajectory">Trayectoria</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}

export default Footer