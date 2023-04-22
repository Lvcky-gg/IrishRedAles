
import React from 'react'
import './allBrew.css'
import MapPageA from '../Map'
import { useSelector } from 'react-redux';
import BreweryCardHome from './BreweryCardAllBrew';

const AllBrew = () => {
    const breweries = useSelector((state) => state.breweries.allBreweries)
    
    return (
        <div>
            <MapPageA></MapPageA>
            <div className='allBrewContainer'>
            {breweries && breweries.map(({id, breweryName, city, state, rating})=>(
                <BreweryCardHome
                id={id}
                key={id}
                breweryName={breweryName}
                city={city}
                state={state}
                rating={rating}
                />
       
            ))
            }
                

            </div>
        </div>
    )
};
export default AllBrew;