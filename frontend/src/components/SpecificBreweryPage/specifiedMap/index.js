import React, { useState, useCallback} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapStyle } from './mapStyle';
import './specificMap.css'




const MapPageB= ({brewery}) => {


const [currentPosition, setCurrentPosition] = useState({lat:1,lng:1})

useEffect(()=>{
    if(brewery){
        setCurrentPosition({lat:+brewery.lat,lng:+brewery.lng})
    }
},[brewery])

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
  })
  
  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const [map, setMap] = useState(null)
  
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  
 
 
    return (
      // Important! Always set the container height explicitly
      
      <div className="map_page__container">
        <div className="GoogleMapSpecified">
            {isLoaded && <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={18}
              center={currentPosition}
              onUnmount={onUnmount}
              backgroundColor='rgba(253, 253, 253, 0.25)'
              options={{styles:mapStyle}}
              
              >
                         
                <Marker 
              key={brewery.id} 
              position={{lat:+brewery.lat, lng:+brewery.lng}}
              id={brewery.id}
              onClick={()=>console.log('hello world')}
              streetView={false} /> 

            </GoogleMap>}   
            </div>  
      </div>
    );
          
}
 
export default MapPageB