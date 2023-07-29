import React from "react"
import { member } from "../data/members"
import styles from '../css/memberCard.module.css'

interface Props {
    content: member
}
const MemberCard: React.FC<Props> = ({ content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.secondDiv}>
                <div className={styles.imgContainer}>
                    <img src={content.image} alt="Imagen miembro" />
                </div>
                <div className={styles.textContainer}>
                    <h3>{content.name}</h3>
                    <p>{content.position}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard