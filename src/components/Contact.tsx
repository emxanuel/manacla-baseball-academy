import { useState } from 'react'
import styles from '../css/contact.module.css'

const Contact = () => {
    const [message, setMessage] = useState('');
    return (
        <div className={styles.container}>
            <h1>Contáctanos</h1>
            <div className={styles.formContainer}>
                <form action="">
                    <textarea placeholder='Escribe tu mensaje aqui!' onChange={(e) => setMessage(e.target.value)}/>
                </form>
                <div className={styles.buttonsContainer}>
                    <a className={styles.gmailButton} target='_blank' 
                    href={`mailto:emmanuel28.05.2006@gmail.com?subject=Baseball%20Academy&body=${message}`}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'/>Gmail</a>
                    <a className={styles.wsButton} target='_blank' href={`https://wa.me/+18098648668?text=${message}`}>
                    <i className='fa-brands fa-whatsapp'/>
                    Whatsapp</a>
                </div>
            </div>
        </div>
    )
}

export default Contact