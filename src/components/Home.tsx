import styles from '../css/home.module.css';
import mainImage from '../assets/images/main-image.jpg'
import homePage3 from '../assets/images/PORTADA-min.svg'
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.mainMedia}>
                <div className={styles.mainImageContainer}>
                    <img src={mainImage} alt="" />
                </div>
                <div className={styles.header}>
                    <h1><span className={styles.name}>MANACLA</span> BASEBALL ACADEMY</h1>
                    <h2>Academia de las futuras estrellas del baseball</h2>
                </div>
            </section>
            <section className={styles.secondSection}>
                <img src={homePage3} alt="Portada" />
            </section>
        </div>
    )
}

export default Home