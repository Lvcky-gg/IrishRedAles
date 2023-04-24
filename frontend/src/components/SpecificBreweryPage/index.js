import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBreweries } from "../../store/breweries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingDisplay from "../RatingDisplay";
import Redirect from "../Redirect";
import "./specificBrew.css";
import { getReviewsByBrewery } from "../../store/reviews";
import { deleteBreweryLike, getBreweryLikes } from "../../store/breweryLikes";
import { createBreweryLike } from "../../store/breweryLikes";
import { useState } from "react";

export const SpecificBrewery = () => {
  const { breweryId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [likeIdState, setLikeIdState] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breweries = useSelector((state) => state.breweries.allBreweries);
  const reviews = useSelector((state) => state.reviews.allReviews);
  const brewLikes = useSelector((state) => state.breweryLikes.breweryLikes);
  const sessionUser = useSelector((state) => state.session.user);
  const brewery = breweries[+breweryId - 1];


  useEffect(() => {
    if(sessionUser){
        if(brewLikes.length === 0)setIsLiked(false)
    for (let i = 0; i < brewLikes.length; i++) {
      if (brewLikes[i].userId === +sessionUser.id) {
        setLikeIdState(brewLikes[i].id);
        setIsLiked(true);
      } else setIsLiked(false)
    }
    }
  }, [brewLikes, sessionUser, isLiked]);

  useEffect(() => {
    dispatch(getAllBreweries());
    dispatch(getReviewsByBrewery(+breweryId));
    dispatch(getBreweryLikes(+breweryId));
  }, [dispatch, breweryId]);

  const onAddReview = (e) => {
    e.preventDefault();
    navigate("/add-review");
  };
  const onAddLike = (e) => {
    e.preventDefault();
    if(sessionUser){
    dispatch(
      createBreweryLike({ userId: +sessionUser.id, breweryId: +breweryId })
    );
    setIsLiked(true);
    }else{
        navigate('/redirectLogin')
    }
  };
  const onDeleteLike = (e) => {
    e.preventDefault();
    dispatch(deleteBreweryLike({ breweryId: +breweryId, likeId: likeIdState }));
    setIsLiked(false);
  };

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
              <RatingDisplay rating={brewery.rating}></RatingDisplay>
              <h2 className="specificHeader">Location</h2>
              <p>
                {brewery.addressLineOne}, {brewery.city}
              </p>
              <p>{brewery.state} </p>
              <h2 className="specificHeader">About</h2>
              <p>{brewery.description}</p>
              <h2 className="specificHeader">Likes:{brewLikes.length}</h2>
              
              <div className="specificBreweryContainerBtn">
                <button className="specificButton" onClick={onAddReview}>
                  <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
                  <p>Add review</p>
                </button>

                {sessionUser && +sessionUser.id === brewery.ownerId && (
                  <button className="specificButton">
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    <p>Edit Brewery</p>
                  </button>
                )}

                {isLiked === false ? (
                  <button className="specificButton" onClick={onAddLike}>
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
                    <p>Like</p>
                  </button>
                ) : (
                  <button className="specificButton" onClick={onDeleteLike}>
                    <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
                    <p>Unlike</p>
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* <div className="specificBreweryContainerimgs">images placeholder</div> */}
          {reviews.length ? (
            <div>hello</div>
          ) : (
            <div className="specificHolder">
              <h2>There are no reviews</h2>
            </div>
          )}
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
