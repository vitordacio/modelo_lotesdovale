import styles from './Welcome.module.css'

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <h3>Bem-vindo ao <span>Lotes do Vale</span></h3>
            <p>Escolha a terra que você vai chamar de sua</p>
        </div>
    )
}

export default Welcome