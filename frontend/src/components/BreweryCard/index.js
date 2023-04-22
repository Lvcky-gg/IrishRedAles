import React from "react";
import { useNavigate } from "react-router-dom";
import './breweryCard.css'

const BreweryCard = ({id, breweryName, city, state}) => {
    const navigate = useNavigate()
    
    return (

            <div 
            onClick={(e)=>{
                e.preventDefault()
                navigate(`/breweries/${id}`)
            }}
            className="breweryCard" loading="lazy">
                <div className="breweryCardInner">
                <h1
                >{breweryName}</h1>
                <h2>{city}, {state}</h2>
                    
                </div>
            </div>   
    )
};
export default BreweryCard;