import styles from '../css/home.module.css';
import homePage1 from '../assets/images/home-page-1.jpg'
import homePage2 from '../assets/images/home-page-2.jpg'
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call
import { Slide } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div>
            <section className={styles.mainMedia}>
                <div className={styles.header}>
                    <h1><span className={styles.name}>Richard Acevedo</span> Baseball Academy</h1>
                    <h2>Academia de las futuras estrellas del baseball</h2>
                </div>
            </section>
            <section className={styles.secondSection}>
                <h3>Informaciones</h3>
                <Slide triggerOnce>
                    <div className={styles.animatedChild}>
                        <p>
                            En nuestra academia, creemos en el poder transformador de este 
                            deporte, donde cada swing, cada lanzamiento y cada corrida de bases 
                            representa una oportunidad para superar los límites, aprender lecciones de 
                            vida y forjar el carácter de los jugadores.
                        </p>
                        <img src={homePage1} alt="Playing baseball photo" />
                    </div>
                </Slide>
                <Slide triggerOnce direction='right'>
                    <div className={`${styles.rowReverse} ${styles.animatedChild}`}>
                        <p>
                        Conocemos la importancia del desarrollo integral de nuestros jugadores, 
                        no solo en términos físicos y técnicos, sino también en su carácter, 
                        mentalidad y resiliencia, fomentando valores como el trabajo en equipo, 
                        la disciplina y el liderazgo que los acompañarán durante toda su vida.
                        </p>
                        <img src={homePage2} alt="Playing baseball photo" />
                    </div>
                </Slide>
                <Slide triggerOnce>
                    <div className={styles.animatedChild}>
                        <p>Estamos ubicados en (Provincia), República Dominicana</p>
                        <iframe src='https://svgshare.com/i/8e6.svg' />
                    </div>
                </Slide>
            </section>
        </div>
    )
}

export default Home