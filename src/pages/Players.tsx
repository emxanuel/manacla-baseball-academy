import players, { player } from "../data/players"
import { useParams } from "react-router-dom"
import PlayerCard from "../components/PlayerCard"
import styles from '../css/players.module.css'

const Players = () => {
    const params = useParams()
    const year = params.year
    const playersByYear: player[] = [];
    players.map(p => {
        if (p.year === year){
            playersByYear.push(p)
        }
    })
    console.log(playersByYear)
    return (
        <div className={styles.container}>
            <h1>Elegibles {year}</h1>
            <div className={styles.players}>
                {playersByYear[0] !== null? playersByYear.map(player => {
                        return <PlayerCard player={player} />
                    }) : (
                    <div className={styles.notFound}>
                        <h2>No hay elegibles para el {year}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Players