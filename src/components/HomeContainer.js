import styles from './HomeContainer.module.css'
import Product from './Product'
import data from '../database/data'
import HomeMap from './HomeMap'

const HomeContainer = () => {
    return (
        <div className={styles.HomeContainer}>
            <h2>Conheça <span>Nossos Imóveis</span></h2>
            <div className={styles.HomeContainerMap}>
                <HomeMap />
            </div>
            <Product itens={data} />
        </div>
    )
}

export default HomeContainer