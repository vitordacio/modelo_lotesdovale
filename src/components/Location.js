import styles from './Location.module.css'
import { useParams } from 'react-router-dom'
import data from '../database/data'

const Location = () => {
    const { id } = useParams()

    const item = data.find((item) => item.id === Number(id))

    return (
        <div className={styles.Location}>
            <h3>Localização</h3>
            <p>{item.adress}</p>
        </div>
    )
}

export default Location