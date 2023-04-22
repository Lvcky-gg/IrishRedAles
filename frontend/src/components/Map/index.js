import React, { useState, useCallback} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllBreweries } from '../../store/breweries';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapStyle } from './mapStyle';
import './map.css'




const MapPageA= () => {
// const styledMapType = new google.maps.StyledMapType(
//         mapStyle
//     )


//This sets the center of the map. This must be set BEFORE the map loads
const breweries = useSelector((state) => state.breweries.allBreweries)

const dispatch = useDispatch()
console.log(breweries)

const [currentPosition, setCurrentPosition] = useState({lat:1,lng:1})


// This is the equivalent to a script tag
useEffect(()=>{
    if(breweries[0]){
        setCurrentPosition({lat:breweries[0].lat,lng:breweries[0].lng})
    }
},[breweries])
useEffect(()=>{
    dispatch(getAllBreweries())


},[dispatch])

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
        <div className="GoogleMap">
            {isLoaded && <GoogleMap
            //   defaultCenter={{lat:breweries[0].lat,lng:breweries[0].lng}}
              mapContainerStyle={containerStyle}
              zoom={12}
              center={currentPosition}
              onUnmount={onUnmount}
              backgroundColor='rgba(253, 253, 253, 0.25)'
              options={{styles:mapStyle}}
              >
                         
            {breweries && breweries.map(({id, breweryName, lat, lng})=>(
                <Marker 
              key={id} 
              position={{lat:lat, lng:lng}}
              title={breweryName}
              id={id}
            //   icon={{
            //     path: 'M 100 100 L 300 100 L 200 300 z',
            //     fillColor: 'rgba(253, 253, 253, 0.26)',
            //     fillOpacity: 1,
            //     scale: .2,
            //     strokeColor: '#04873C',
            //     strokeWeight: 2
            //   }}
              onClick={()=>console.log('hello world')}
              streetView={false} /> 
            ))
            }
            </GoogleMap>}   
            </div>  
      </div>
    );
          
}
 
export default MapPageA