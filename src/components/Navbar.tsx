import styles from '../css/navbar.module.css';
import ElegibleMenu from './ElegibleMenu';
import { scrollZero, toggleShowElement } from '../functions/elements';
import elegibleMenuStyles from '../css/elegibleMenu.module.css'
import navbarMenuStyles from '../css/navbarMenu.module.css'
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.container} id='navbar'>
                <div className={styles.logo}>
                    <img className={styles.icon} src={logo} />
                    <h1 className={styles.name}>MANACLA Baseball</h1>
                </div>
                <div className={styles.links}>
                    <Link to='/' onClick={scrollZero}>Inicio</Link>
                    <Link to='/about' onClick={scrollZero}>Quienes Somos</Link>
                    <div className={styles.menu}>
                        <p onClick={() => {
                            const menu = document.getElementsByClassName(elegibleMenuStyles.container) as HTMLCollectionOf<HTMLElement>;
                            toggleShowElement(menu[0], elegibleMenuStyles);
                        }}
                        >Elegibles</p>

                        <ElegibleMenu />
                    </div>
                    <Link to='/trajectory' onClick={scrollZero}>Trayectoria</Link>
                    <Link to='/contact' onClick={scrollZero}>Contacto</Link>
                </div>
                <div className={styles.menuButton}>
                    <button className={styles.icon} onClick={() => {
                        const menu = document.getElementsByClassName(navbarMenuStyles.container) as HTMLCollectionOf<HTMLElement>
                        toggleShowElement(menu[0], navbarMenuStyles)
                    }}><i className='fa-solid fa-bars' /></button>
                </div>
            </nav>
            <NavbarMenu />
        </div>

    )
}

export default Navbar