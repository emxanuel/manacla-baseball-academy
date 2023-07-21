import styles from '../css/navbar.module.css';
import ElegibleMenu from './ElegibleMenu';
import { scrollZero, toggleShowElement } from '../functions/elements';
import elegibleMenuStyles from '../css/elegibleMenu.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.container} id='navbar'>
                <div className={styles.logo}>
                    <img className={styles.icon}  src='https://upload.wikimedia.org/wikipedia/commons/9/92/Baseball.svg'/>
                    <h1 className={styles.name}>RA Baseball Academy</h1>
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
                    <Link to='/trajectory'onClick={scrollZero}>Trayectoria</Link>
                    <Link to='/contact' onClick={scrollZero}>Contacto</Link>
                </div>
            </nav>
        </div>

    )
}

export default Navbar