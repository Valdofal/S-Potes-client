import React,{Component} from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = 
{    
    width: '400px',
    height: '400px'
}
  
const center =
{
    lat: 	48.856,
    lng:    2.3521
}

function Map() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDu5_YAb-4IlWFGOB-_9HwciwwDQQHefcs"
    })
    
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)