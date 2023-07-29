import styles from '../css/contact.module.css'
import { selectedPage } from '../functions/elements'
import { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        selectedPage('contact')
    }, [])
    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <div className={styles.secondDiv}>
                <a className={styles.wsButton} target='_blank'
                    href={`https://wa.me/+18296490757`}>
                    <i className={`fa-brands fa-whatsapp`} />
                    Whatsapp</a>
            </div>
        </div>
    )
}

export default Contact