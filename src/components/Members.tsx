import { members } from '../data/members'
import MemberCard from './MemberCard'
import styles from '../css/members.module.css'

const Members = () => {
    return (
        <div className={styles.container}>
            <h1>Miembros del equipo</h1>
            {members.length !== 0? (
                members.map(member => (
                    <MemberCard content={member} />
                ))
            ) : (
                <h2>Aun no hay miembros</h2>
            )}
        </div>
    )
}

export default Members