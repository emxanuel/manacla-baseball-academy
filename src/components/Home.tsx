import styles from '../css/home.module.css';
import homePage1 from '../assets/images/home-page-1.jpg'
import homePage2 from '../assets/images/home-page-2.jpg'
import mainPhoto from '../assets/images/main-image.JPG'
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call
import { Slide, Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.mainMedia}>
                <div className={styles.mainImageContainer}>
                    <img src={mainPhoto} alt="" />
                </div>
                <div className={styles.header}>
                    <h1><span className={styles.name}>Richard Acevedo</span> Baseball Academy</h1>
                    <h2>Academia de las futuras estrellas del baseball</h2>
                </div>
            </section>
            <section className={styles.secondSection}>
                <Fade triggerOnce>
                    <h3>Informaciones</h3>
                </Fade>
                {/* <Slide triggerOnce> */}
                    <div className={styles.animatedChild}>
                        <Slide triggerOnce>
                            <p>
                                En nuestra academia, creemos en el poder transformador de este 
                                deporte, donde cada swing, cada lanzamiento y cada corrida de bases 
                                representa una oportunidad para superar los límites, aprender lecciones de 
                                vida y forjar el carácter de los jugadores.
                            </p>
                        </Slide>
                        <Slide triggerOnce direction='right'>
                            <img src={homePage1} alt="Playing baseball photo" />
                        </Slide>
                    </div>
                {/* </Slide> */}
                {/* <Slide triggerOnce direction='right'> */}
                    <div className={`${styles.rowReverse} ${styles.animatedChild}`}>
                        <Slide triggerOnce direction='right'>
                            <p>
                            Conocemos la importancia del desarrollo integral de nuestros jugadores, 
                            no solo en términos físicos y técnicos, sino también en su carácter, 
                            mentalidad y resiliencia, fomentando valores como el trabajo en equipo, 
                            la disciplina y el liderazgo que los acompañarán durante toda su vida.
                            </p>
                        </Slide>
                        <Slide triggerOnce>
                            <img src={homePage2} alt="Playing baseball photo" />
                        </Slide>
                    </div>
                {/* </Slide> */}
                {/* <Slide triggerOnce> */}
                    <div className={styles.animatedChild}>
                        <Slide triggerOnce>
                            <p>Estamos ubicados en (Provincia), República Dominicana</p>
                        </Slide>
                        <Slide triggerOnce direction='right'>
                            <div className={styles.pinContainer}><i className={`${styles.informationPin} fa-solid fa-location-dot`} /></div>
                        </Slide>
                    </div>
                {/* </Slide> */}
            </section>
        </div>
    )
}

export default Home