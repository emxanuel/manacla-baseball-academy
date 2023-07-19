import styles from '../css/navbar.module.css';
import ElegibleMenu from './ElegibleMenu';
import { toggleShowElement } from '../functions/elements';
import elegibleMenuStyles from '../css/elegibleMenu.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div>

            </div>
            <div className={styles.links}>
                <Link to='/'>Inicio</Link>
                <Link to='/about'>Quienes Somos</Link>
                <div className={styles.menu}>
                    <p onClick={() => {
                        const menu = document.getElementsByClassName(elegibleMenuStyles.container) as HTMLCollectionOf<HTMLElement>;
                        toggleShowElement(menu[0], elegibleMenuStyles);
                    }}
                    >Elegibles</p>
                    <ElegibleMenu />
                </div>
                <Link to='/trajectory'>Trayectoria</Link>
                <Link to='/contact'>Contacto</Link>
            </div>
        </nav>
    )
}

export default Navbar