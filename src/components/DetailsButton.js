import styles from './DetailsButton.module.css'

import { Link } from 'react-router-dom'


const DetailsButton = ({ productId }) => {

    const teste = (e) => {
        e.stopPropagation()

        return e.screenX = 0
    }

    return (
        <Link to={`/details/${productId}`} >
            <button onClick={teste} className={styles.btnDetails}>Saiba Mais</button>
        </Link >
    )
}

export default DetailsButton