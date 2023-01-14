import styles from './TableButton.module.css'

const TableButton = ({ link }) => {
    return (
        <div className={styles.project}>
            <h2>Tabela de Lotes</h2>
            <a href={link} target={`_blank`}>Ver Projeto</a>
        </div>
    )
}

export default TableButton