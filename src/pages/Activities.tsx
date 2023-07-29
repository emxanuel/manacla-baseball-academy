import { useEffect } from 'react'
import { selectedPage } from '../functions/elements'
import Activity from '../components/Activity'
import { activities } from '../data/activities'
import styles from '../css/activities.module.css'
import { Zoom } from 'react-awesome-reveal'

const Activities = () => {
    useEffect(() => {
        selectedPage('activities')
    }, [])

    return (
        <div className={styles.container}>
            {activities.length !== 0? (
                activities.map(activity => (
                    <Zoom duration={500} triggerOnce key={activity.id}>
                        <Activity content={activity}/>
                    </Zoom>
                ))
            ) : (
                    <h1>No hay actividades</h1>
            )}
        </div>
    )
}

export default Activities