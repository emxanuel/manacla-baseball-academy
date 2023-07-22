import styles from '../css/navbarMenu.module.css'
import { Link } from 'react-router-dom'
import { ocultNavbarMenu, scrollZero, toggleShowElement } from '../functions/elements'
import ElegibleModal from './ElegibleModal'
import modalStyle from '../css/elegibleModal.module.css'

const NavbarMenu = () => {
    
    window.addEventListener('scroll', ocultNavbarMenu)
    const toggle = () => {
        const element = document.getElementsByClassName(modalStyle.container) as HTMLCollectionOf<HTMLElement>;
        toggleShowElement(element[0], modalStyle)
    }
    return (
        <div>
            <div className={`${styles.notShow} ${styles.hidden} ${styles.container} hideOnScroll`} id={styles.container}>
                <Link className={styles.links} to='/' onClick={scrollZero}>Inicio</Link>
                <Link className={styles.links} to='/about' onClick={scrollZero}>Quienes Somos</Link>
                <button onClick={toggle}><p className={styles.links}>Elegibles</p></button>
                <Link className={styles.links} to='/trajectory' onClick={scrollZero}>Trayectoria</Link>
                <Link className={styles.links} to='/contact' onClick={scrollZero}>Contacto</Link>
            </div>
            <ElegibleModal />
        </div>
    )
}

export default NavbarMenu