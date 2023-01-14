import style from './DetailsInfo.module.css'
import { useParams } from 'react-router-dom'
import data from '../database/data'
import ProjectButton from './ProjectButton'
import TableButton from './TableButton'

const DetailsInfo = () => {
    const { id } = useParams()

    const item = data.find((item) => item.id === Number(id))
    return (
        <div className={style.DetailsInfo}>
            <h3>Sobre o <span>Empreendimento</span></h3>
            <h1>{item.name}</h1>
            <section className={style.area}>
                <h3>Área privativa mínima<span>{item.area}m²</span></h3>
            </section>
            {(item.images.project || item.images.table) && <h2>Para mais detalhes, basta consultar:</h2>}
            {item.images.project && <ProjectButton link={item.images.project} />}
            {item.images.table && <TableButton link={item.images.table} />}
        </div>
    )
}

export default DetailsInfo