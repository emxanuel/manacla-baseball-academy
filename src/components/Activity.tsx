import React from 'react'
import { activity } from '../data/activities'
import styles from '../css/activity.module.css'

interface Props {
    content: activity
}

const Activity: React.FC<Props> = ({ content }) => {
    return (
        <div className={styles.container}>
            <h2>{content.name}</h2>
            <div className={styles.imageContainer}>
                <img src={content.image} alt="Imagen actividad" />
            </div>
            <p>{content.description}</p>
        </div>
    )
}

export default Activity