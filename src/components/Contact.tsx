import styles from '../css/contact.module.css'

const Contact = () => {
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