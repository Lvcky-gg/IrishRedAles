import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReviewLikes } from "../../store/reviewLikes";
import { getReviewsByBrewery } from "../../store/reviews";
import './breweryCard.css'

const BreweryCard = ({id, breweryName, city, state}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (

            <div 
            onClick={(e)=>{
                e.preventDefault()
                dispatch(getReviewLikes())
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