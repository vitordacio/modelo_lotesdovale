import styles from './ProductInfo.module.css'
import DetailsButton from './DetailsButton'
import { BiArea } from 'react-icons/bi';
import ContactButton from './ContactButton';



const ProductInfo = ({ item }) => {

    return (
        <div className={styles.productInfo}>
            <h3>{item.name}</h3>
            <p>{item.district}, {item.city}</p>
            <div className={styles.productInfoArea}>
                <span>Área privativa mínima</span>
                <b><BiArea />{item.area}m²</b>
            </div>
            <div className={styles.productButtons}>
                <ContactButton item={item} />
                <DetailsButton productId={item.id} />
            </div>
        </div>
    )
}

export default ProductInfo