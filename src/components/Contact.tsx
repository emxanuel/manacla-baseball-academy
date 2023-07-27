import { useState } from 'react'
import styles from '../css/contact.module.css'

const Contact = () => {
    const [message, setMessage] = useState('');
    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <div className={styles.secondDiv}>
                <div className={styles.ourMedia}>
                    <h2>Nuestros medios</h2>
                    <div className={styles.mediaContainer}>
                        <ul className={styles.list}>
                            <li className={styles.liNumber}><span className={styles.listTitle}>Teléfono:</span>
                                <a href="https://wa.me/+18296490757" target='_blank' 
                                className={styles.phone}>(829) 649-0757</a>
                            </li>
                            <li>
                                <span className={styles.listTitle}>Redes Sociales:</span>
                                <ul className={styles.socialMedia}>
                                    <li >
                                        <a className={styles.instagramLink} href="https://instagram.com/manaclabaseballacademy" target='_blank'><i className={`fa-brands fa-instagram ${styles.instagram}`} /> @manaclabaseballacademy</a>
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