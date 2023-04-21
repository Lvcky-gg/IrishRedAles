import React from "react";
import './breweryCard.css'

const BreweryCard = ({id, breweryName, city, state}) => {
    
    return (
        <div >
            <div className="breweryCard" loading="lazy">
                <div className="breweryCardInner">
                <h1>{breweryName}</h1>
                <h2>{city}, {state}</h2>
                    
                </div>
            </div>
            <div className="bg-blur"></div>
    
        </div>
      
    )
};
export default BreweryCard;