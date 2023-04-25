
import React, { useEffect } from 'react'
import './allBrew.css'
import MapPageA from '../Map'
import { useDispatch, useSelector } from 'react-redux';
import BreweryCardHome from './BreweryCardAllBrew';
import { useLocation } from 'react-router-dom';
import { filterBreweries, getAllBreweries } from '../../store/breweries';
import Redirect from '../Redirect';



const AllBrew = () => {
    const breweries = useSelector((state) => state.breweries.allBreweries)
    // const filterBreweries = useSelector((state)=>state.breweries.filterBreweries)
    const location = useLocation()
    const parameter = location.search;
    const dispatch = useDispatch()
    // if(parameter)dispatch(filterBreweries(parameter))
    useEffect(()=>{
        if(parameter)dispatch(filterBreweries(parameter))
    },[dispatch, parameter])
 
    return (
        <>
         {breweries.length?(
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
        ):(<div>
            <Redirect></Redirect>
            </div>)
        }
        </>
    )
};
export default AllBrew;