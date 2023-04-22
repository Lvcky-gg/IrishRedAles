import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllBreweries } from "../../store/breweries";
import './specificBrew.css'


export const SpecificBrewery = () => {
    const {breweryId } = useParams();
    const dispatch = useDispatch()
    const breweries = useSelector((state)=> state.breweries.allBreweries)
    const brewery = breweries[+breweryId -1]
    useEffect(()=>{
        dispatch(getAllBreweries())
    },[dispatch])
    
    console.log(breweryId);
    return (
        <div>
            {
                brewery?(
                <div>
                    
                </div>):(
                <div>
                       
                </div>)
            }

        </div>
    )
}
export default SpecificBrewery