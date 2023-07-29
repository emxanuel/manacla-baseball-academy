import {useEffect} from 'react'
import { selectedPage } from '../functions/elements'

const Activities = () => {
    useEffect(() => {
        selectedPage('activities')
    }, [])
    return (
        <div>Activities</div>
    )
}

export default Activities