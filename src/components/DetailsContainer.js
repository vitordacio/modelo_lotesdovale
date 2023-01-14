import styles from './DetailsContainer.module.css'
import DetailsInfo from './DetailsInfo'
import DetailsPhotos from './DetailsPhotos'
import ContactLightButton from './ContactLightButton'


const DetailsContainer = () => {
    return (
        <div className={styles.DetailsContainer}>
            <div className={styles.DetailsContainerb}>
                <DetailsInfo />
                <DetailsPhotos />
            </div>
            <div className={styles.buttonContainer}>
                <ContactLightButton />
            </div>
        </div>
    )
}

export default DetailsContainer