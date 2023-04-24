import React from "react";
import './home.css'
import topImage from '../../images/view-beer-taps-brewery.jpg'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllReviews } from "../../store/reviews";
import { getAllBreweries, sortBreweriesByNewest } from "../../store/breweries";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreweryCard from "../BreweryCard";


const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const breweries = useSelector((state) => state.breweries.allBreweries)
    useEffect(()=> {
        dispatch(sortBreweriesByNewest())
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
                <div className="homeCards">
                    {breweries.map(({id, breweryName, city, state})=>(
                        <BreweryCard 
                        id={id} 
                        key={id} 
                        breweryName={breweryName} 
                        city={city} 
                        state={state}
                        ></BreweryCard>
                    ))
                    }

                </div>
            </div>
        </div>
    </div>
   ) 
}
export default HomePage;