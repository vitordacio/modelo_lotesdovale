
import styles from './Product.module.css'
import ProductInfo from './ProductInfo';


const Product = ({ itens }) => {

    return (
        <div className={styles.products}>
            {itens.map((item) => {
                return (
                    <div key={item.id} className={styles.product}>
                        <div className={styles.productImg} style={{ backgroundImage: `url("${item.images.card}")` }}></div>
                        <div className={styles.productInfoContainer}>
                            <ProductInfo item={item} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product