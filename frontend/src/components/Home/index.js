import React from "react";
import './home.css'
import topImage from '../../images/view-beer-taps-brewery.jpg'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllReviews } from "../../store/reviews";
import { getAllBreweries } from "../../store/breweries";


const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllBreweries())
        dispatch(getAllReviews())
    }, [dispatch])

   return (
    <div className="homeRoot">
        <img 
        className="homeImgTop"
        src={topImage} alt="#">
        </img>
        <div className="insetHome">
            <div>
                <h2 className="irishRedAles">Irish Red Ales</h2>
                <div className="brewsAndReviews">
                    <h1 className="brewsAndReviewsGreen">Brews</h1>
                    <h1 className="brewsAndReviewsWhite">and</h1>
                    <h1 className="brewsAndReviewsOrange">Reviews</h1>
                </div>
            </div>
        </div>
    </div>
   ) 
}
export default HomePage;