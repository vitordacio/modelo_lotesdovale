import styles from './ProjectButton.module.css'


const ProjectButton = ({ link }) => {

    return (
        <div className={styles.project}>
            <h2>Projeto Urbanístico</h2>
            <a href={link} target={`_blank`}>Ver Projeto</a>
        </div>
    )
}

export default ProjectButton