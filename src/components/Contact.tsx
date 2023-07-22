import { useState } from 'react'
import styles from '../css/contact.module.css'
import animatedIcon from '../assets/images/wired-lineal-981-consultation.webp'

const Contact = () => {
    const [message, setMessage] = useState('');
    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <div className={styles.secondDiv}>
                <div className={styles.icon}>
                    <img src={animatedIcon} alt="" />
                </div>
                <div className={styles.ourMedia}>
                    <h2>Nuestros medios</h2>
                    <div className={styles.mediaContainer}>
                        <ul className={styles.list}>
                            <li><span className={styles.listTitle}>Correo:</span> example@gmail.com</li>
                            <li><span className={styles.listTitle}>Teléfono:</span> (809)-000-0000</li>
                            <li>
                                <span className={styles.listTitle}>Redes Sociales:</span>
                                <ul className={styles.socialMedia}>
                                    <li>
                                        <a href=""><i className={`fa-brands fa-instagram ${styles.instagram}`} /> @rabaseball</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h2>Ponte en contacto con nosotros ya</h2>
                    <form action="">
                        <textarea placeholder='Escribe tu mensaje aqui!' onChange={(e) => setMessage(e.target.value)} />
                    </form>
                    <div className={styles.buttonsContainer}>
                        <a className={styles.gmailButton} target='_blank'
                            href={`mailto:emmanuel28.05.2006@gmail.com?subject=Baseball%20Academy&body=${message}`}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' />Gmail</a>
                        <a className={styles.wsButton} target='_blank' href={`https://wa.me/+18098648668?text=${message}`}>
                            <i className='fa-brands fa-whatsapp' />
                            Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact