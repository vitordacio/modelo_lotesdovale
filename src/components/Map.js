import styles from './Map.module.css'
import { useParams } from 'react-router-dom'
import data from '../database/data'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = () => {
    const { id } = useParams()
    const item = data.find((item) => item.id === Number(id))

    const center = {
        lat: item.lat,
        lng: item.lng
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`
    })


    return (
        <div className={styles.Map}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    center={center}
                    zoom={14}
                >
                    <Marker position={center} options={{ label: { text: `${item.name}`, className: `${styles.mapMarker}`, } }} />
                </GoogleMap>
            ) : <></>
            }
        </div >
    )
}

export default Map
