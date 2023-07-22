import React from 'react'
import styles from '../css/navbarMenu.module.css'
import { Link } from 'react-router-dom'
import { hide, scrollZero, toggleShowElement } from '../functions/elements'

const NavbarMenu = () => {
    window.addEventListener('scroll', () => {
        const element = document.getElementById(styles.container) as HTMLElement;
        hide(element, styles)
    })
    return  (
        <div className={`${styles.notShow} ${styles.hidden} ${styles.container} hideOnScroll`} id={styles.container}>
            <Link className={styles.links} to='/' onClick={scrollZero}>Inicio</Link>
            <Link className={styles.links} to='/about' onClick={scrollZero}>Quienes Somos</Link>
            <p className={styles.links}>Elegibles</p>
            <Link className={styles.links} to='/trajectory' onClick={scrollZero}>Trayectoria</Link>
            <Link className={styles.links} to='/contact' onClick={scrollZero}>Contacto</Link>
        </div>
    )
}

export default NavbarMenu