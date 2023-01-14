import styles from './HomeMap.module.css'
import data from '../database/data'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const HomeMap = () => {

    const center = {
        lat: -9.399167,
        lng: -40.500497
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`
    })


    return (
        <div className={styles.homeMap}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    center={center}
                    zoom={12}
                >
                    {data.map((item) => <Marker key={item.id} position={{ lat: item.lat, lng: item.lng }} options={{ label: { text: `${item.name}`, className: `${styles.homeMapMarker}` } }} />)}
                </GoogleMap>
            ) : <></>
            }
        </div >
    )
}

export default HomeMap