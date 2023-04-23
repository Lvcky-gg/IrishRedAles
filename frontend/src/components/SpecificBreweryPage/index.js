import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllBreweries } from "../../store/breweries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingDisplay from "../RatingDisplay";
import Redirect from "../Redirect";
import "./specificBrew.css";
import { getReviewsByBrewery } from "../../store/reviews";
import { getBreweryLikes } from "../../store/breweryLikes";

export const SpecificBrewery = () => {
  const { breweryId } = useParams();
  const dispatch = useDispatch();
  const breweries = useSelector((state) => state.breweries.allBreweries);
  const reviews = useSelector((state)=>state.reviews.allReviews);
  
  const sessionUser = useSelector((state)=>state.session.user);
  console.log(reviews)
  const brewery = breweries[+breweryId - 1];
  useEffect(() => {
    dispatch(getAllBreweries());
    dispatch(getReviewsByBrewery(+breweryId))
    dispatch(getBreweryLikes(+breweryId))
  }, [dispatch, breweryId]);
  
  return (
    <div>
      {brewery ? (
        <div>
          <div className="specificBreweryContainer">
            <img
              className="specificBreweryContainerIMG"
              src="https://imgs.search.brave.com/xjs25IGx1dhPbD6ueLPad87O61xUBgTRbd8qeIHCFwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/aUZzel90dlB5R0Vw/VXpoSDFONkVRSGFG/aiZwaWQ9QXBp"
            />

            <div className="specificBreweryContainerinfo">
              <h1>{brewery.breweryName}</h1>
              <h2 className="specificHeader">Location</h2>
              <p>
                {brewery.addressLineOne}, {brewery.city}
              </p>
              <p>{brewery.state} </p>
              <h2 className="specificHeader">About</h2>
              <p>{brewery.description}</p>
              <RatingDisplay rating={brewery.rating}></RatingDisplay>
              <div className="specificBreweryContainerBtn">
                <button className="specificButton">
                  <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
                  <p>Add review</p>
                </button>

               {+sessionUser.id === brewery.ownerId && <button className="specificButton">
               <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                  <p>Edit Brewery</p>
                </button> }
                <button className="specificButton">
                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                  <p>Like Brewery</p>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="specificBreweryContainerimgs">images placeholder</div> */}
          {reviews.length?
          (
          <div>
            hello
            </div>)
          :(<div className='specificHolder'>
            <h2>There are no reviews</h2>
          </div>)}
        </div>
      ) : (
        <div>
          <Redirect></Redirect>
        </div>
      )}
    </div>
  );
};
export default SpecificBrewery;
