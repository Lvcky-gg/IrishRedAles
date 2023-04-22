
import React, { useEffect } from 'react'
import './allBrew.css'
import MapPageA from '../Map'
import { useDispatch, useSelector } from 'react-redux';
import BreweryCardHome from './BreweryCardAllBrew';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { filterBreweries, getAllBreweries } from '../../store/breweries';



const AllBrew = () => {
    const navigate = useNavigate()
    const breweries = useSelector((state) => state.breweries.allBreweries)
    const location = useLocation()
    const parameter = location.search;
    const dispatch = useDispatch()
    useEffect(()=>{
        if(parameter)dispatch(filterBreweries(parameter))
        else dispatch(getAllBreweries())
    },[dispatch, parameter])
  
    
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