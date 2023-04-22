import React from 'react';
import './ratingDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RatingDisplay = ({rating}) => {
    const val = [];
    for(let i = 0; i < rating; i++){
        val.push(1)
    }
    return (
        <div>
            {rating ?(val.map(()=>(
                <FontAwesomeIcon icon="fa-solid fa-star" />
            ))):(<p>No rating</p>)}
        </div>
    )
}
export default RatingDisplay