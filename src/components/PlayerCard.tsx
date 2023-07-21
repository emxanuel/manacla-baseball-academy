import React from "react"
import { player } from "../data/players"
import styles from '../css/playerCard.module.css'
import { Fade, Slide } from "react-awesome-reveal"

interface props {
    player: player
}

const PlayerCard: React.FC<props> = ({ player }) => {
    return (
        <Slide triggerOnce>
            <Fade triggerOnce delay={5}>
                <div className={styles.container}>
                    <div className={styles.secondDiv}>
                        <div className={styles.header}>
                            <div className={styles.imgContainer}>
                                <img src="" alt="Imagen Pelotero" />
                            </div>
                            <h2>{`${player.name} ${player.lastName}`}</h2>
                        </div>
                        <div className={styles.description}>
                            <Fade cascade damping={1e-1}><p>{player.description}</p></Fade>
                        </div>
                    </div>
                    <div className={styles.video}>
                        <video src=""></video>
                    </div>
                </div>
            </Fade>
        </Slide>
    )
}

export default PlayerCard