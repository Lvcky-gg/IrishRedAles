import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllBreweries } from "../../store/breweries";
import RatingDisplay from "../RatingDisplay";
import Redirect from "../Redirect";
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
                <div className="specificBreweryContainer">
                    <img  className="specificBreweryContainerIMG" src='https://imgs.search.brave.com/xjs25IGx1dhPbD6ueLPad87O61xUBgTRbd8qeIHCFwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/aUZzel90dlB5R0Vw/VXpoSDFONkVRSGFG/aiZwaWQ9QXBp' />
                    <div className="specificBreweryContainerBtn">
                        <button>Add review</button>
                        <button>placeholder</button>
                        <button>placeholder</button>
                    </div>
                    <div className="specificBreweryContainerimgs">
                        images placeholder
                    </div>
                    <div className="specificBreweryContainerinfo">
                        <h1>{brewery.breweryName}</h1>
                        <h2>Location</h2>
                        <p>{brewery.addressLineOne}, {brewery.city}</p>
                        <p>{brewery.state} </p>
                        <h2>About</h2>
                        <p>{brewery.description}</p>
                        <RatingDisplay 
                        rating={brewery.rating}
                        ></RatingDisplay>
                    </div>
                    <div>
                        ratings placeholder
                    </div>

                    
                </div>):(
                <div>
                     <Redirect></Redirect> 
                </div>)
            }

        </div>
    )
}
export default SpecificBrewery