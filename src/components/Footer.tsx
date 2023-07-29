import { Fade, JackInTheBox } from 'react-awesome-reveal'
import styles from '../css/footer.module.css'
import { scrollZero, selectedPage } from '../functions/elements'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    useEffect(selectedPage)
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <JackInTheBox triggerOnce ><h3>Contáctanos</h3></JackInTheBox>
                <Fade triggerOnce >
                    <div className={styles.content}>
                        <a href="https://wa.me/+18296490757">
                            <FontAwesomeIcon icon={faWhatsapp} className={styles.icons}/>
                            (829) 649-0757</a>
                        <a href="https://instagram.com/manaclabaseballacademy" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className={styles.icons}/>
                            @manaclabaseballacademy</a>
                    </div>
                </Fade>
            </div>
            <div className={styles.location}>
                <JackInTheBox triggerOnce ><h3>Ubicación</h3></JackInTheBox>
                <Fade triggerOnce>
                    <div className={styles.content}>
                        <p><FontAwesomeIcon icon={faLocationDot} className={styles.icons}/>Santo Domingo, República Dominicana</p>
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
                            <li><Link to='/activities'>Actividades</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}

export default Footer