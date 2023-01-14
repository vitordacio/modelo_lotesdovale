import styles from './DetailsPhotos.module.css'
import { GrPrevious, GrNext } from 'react-icons/gr'

import { useParams } from 'react-router-dom'
import { useRef } from 'react'

import data from '../database/data'


const DetailsPhotos = () => {
    const { id } = useParams()
    const item = data.find((item) => item.id === Number(id))
    // const { images } = item

    const photo = useRef(null)
    const photoLink = useRef(null)

    let n = 0

    const setN = (i) => {
        return n = i
    }

    const renderPhoto = (i) => {
        return photo.current.style.backgroundImage = `url("${item.images.pictures[i]}")`
    }

    const setPhotoLink = (i) => {
        return photoLink.current.href = `${item.images.pictures[i]}`
    }

    const handlePrevious = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (n === 0) {
            setN(item.images.pictures.length - 1)
            renderPhoto(n)
            setPhotoLink(n)
            return
        }

        n--
        renderPhoto(n)
        setPhotoLink(n)
        return
    }

    const handleNext = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (n === item.images.pictures.length - 1) {
            setN(0)
            renderPhoto(n)
            setPhotoLink(n)
            return
        }

        n++
        renderPhoto(n)
        setPhotoLink(n)
        return
    }

    return (
        <div className={styles.DetailsPhotos} ref={photo} style={{ backgroundImage: `url("${item.images.pictures[n]}")` }}>
            <div className={styles.photoButtons}>
                <div onClick={handlePrevious}><GrPrevious /></div>
            </div>
            <a href={item.images.pictures[n]} target={`_blank`} ref={photoLink}>Ver imagem original</a>
            <div className={styles.photoButtons}>
                <div onClick={handleNext}><GrNext /></div>
            </div>
        </div>
    )
}

export default DetailsPhotos