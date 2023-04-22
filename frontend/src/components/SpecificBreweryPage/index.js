import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './specificBrew.css'


export const SpecificBrewery = ({
    id, breweryName, ownerId, addressLineOne, city, zip, state, country, lat, lng, rating, createdAt,
    updatedAt, reviews
}) => {
    const {breweryId } = useParams();
    const breweries = useSelector((state)=> state.breweries.allBreweries)
    
    console.log(breweryId);
    return (
        <div>

        </div>
    )
}
export default SpecificBrewery