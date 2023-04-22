import React from "react";
import './breweries.css'
import RatingDisplay from "../../RatingDisplay"; 

const BreweryCardHome = ({breweryName, rating, description, id, city, state}) => {
    return (
        <div className="breweryCardcontainer">
            <div className="breweryCardcontainerUpper"> 
                <img src='https://imgs.search.brave.com/xjs25IGx1dhPbD6ueLPad87O61xUBgTRbd8qeIHCFwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/aUZzel90dlB5R0Vw/VXpoSDFONkVRSGFG/aiZwaWQ9QXBp'
                alt="#"></img>
            </div>
            <div className="breweryCardcontainerInner">
                <h2>{breweryName}</h2>
                <p>{city}, {state}</p>
                <RatingDisplay
                rating={rating}
                ></RatingDisplay>
            </div>
        </div>
    )


}

export default BreweryCardHome;