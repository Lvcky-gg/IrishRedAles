import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBrewery, getAllBreweries } from "../../store/breweries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingDisplay from "../RatingDisplay";
import Redirect from "../Redirect";
import "./specificBrew.css";
import { getReviewsByBrewery } from "../../store/reviews";
import { deleteBreweryLike, getBreweryLikes } from "../../store/breweryLikes";
import { createBreweryLike } from "../../store/breweryLikes";
import { useState } from "react";
import ReveiwCard from "./ReviewCard";
import parse from "html-react-parser";
import MapPageB from "./specifiedMap";
import { getAllReviewLikes } from "../../store/reviewLikes";
import OpenImgModalButton from "../OpenImgModal";
import UploadImg from "../CreateImgModal";
import { getImg } from "../../store/images";

export const SpecificBrewery = () => {
  const { breweryId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [likeIdState, setLikeIdState] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breweries = useSelector((state) => state.breweries.allBreweries);
  const reviews = useSelector((state) => state.reviews.allReviews);
  const images = useSelector((state)=>state.images.allImages)
  const brewLikes = useSelector((state) => state.breweryLikes.breweryLikes);
  const sessionUser = useSelector((state) => state.session.user);
  let brewery;
  for (let i = 0; i < breweries.length; i++) {
    if (breweries[i].id === +breweryId) brewery = breweries[i];
  }

  useEffect(() => {
    if (sessionUser) {
      if (brewLikes.length === 0) setIsLiked(false);
      for (let i = 0; i < brewLikes.length; i++) {
        if (brewLikes[i].userId === +sessionUser.id) {
          setLikeIdState(brewLikes[i].id);
          setIsLiked(true);
        } else setIsLiked(false);
      }
    }
  }, [brewLikes, sessionUser, isLiked]);

  useEffect(() => {
    dispatch(getAllBreweries());
    dispatch(getReviewsByBrewery(+breweryId));
    dispatch(getBreweryLikes(+breweryId));
    dispatch(getAllReviewLikes());
    dispatch(getImg({breweryId}))
  }, [dispatch, breweryId]);

  const onAddReview = (e) => {
    e.preventDefault();
    if (sessionUser) {
      navigate(`/breweries/${breweryId}/reviews`);
    } else {
      navigate("/redirect-Login");
    }
  };
  const onDeleteBrewery = (e) => {
    e.preventDefault();
    if (+sessionUser.id === brewery.ownerId) {
      if (window.confirm("Are you sure you want to delete this brewery?")) {
        dispatch(deleteBrewery(+breweryId));
        navigate("/");
      }
    }
  };
  const onAddLike = (e) => {
    e.preventDefault();
    if (sessionUser) {
      dispatch(
        createBreweryLike({ userId: +sessionUser.id, breweryId: +breweryId })
      );
      setIsLiked(true);
    } else {
      navigate("/redirect-login");
    }
  };
  const onDeleteLike = (e) => {
    e.preventDefault();

    dispatch(deleteBreweryLike({ breweryId: +breweryId, likeId: likeIdState }));
    setIsLiked(false);
  };
  const onEditBrew = (e) => {
    e.preventDefault();
    navigate(`/breweries/${breweryId}/edit-brewery`);
  };

  return (
    <div>
      {brewery ? (
        <div>
          <div className="specificBreweryContainer">


            <div className="specificLeft">
              {images.length ?(
                <img
                className="specificBreweryContainerIMG"
                src={images[0].URL}
              />
              ):(<img
                className="specificBreweryContainerIMG"
                src="https://imgs.search.brave.com/xjs25IGx1dhPbD6ueLPad87O61xUBgTRbd8qeIHCFwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/aUZzel90dlB5R0Vw/VXpoSDFONkVRSGFG/aiZwaWQ9QXBp"
              />)}
          
              {images.length > 1&& <div className="siideArrows">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />

              </div>}



              <div className="specificBreweryContainerBtn">
                <button className="specificButton" onClick={onAddReview}>
                  <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
                  <p>Add review</p>
                </button>
                <OpenImgModalButton 
                modalComponent={<UploadImg
                breweryId={+breweryId}
                />}>

                </OpenImgModalButton>
                

                {sessionUser && +sessionUser.id === brewery.ownerId && (
                  <button onClick={onEditBrew} className="specificButton">
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    <p>Edit</p>
                  </button>
                )}
                {sessionUser && +sessionUser.id === brewery.ownerId && (
                  <button onClick={onDeleteBrewery} className="specificButton">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                    <p>Delete</p>
                  </button>
                  
                )}
              </div>
            </div>
            <div className="specificBreweryContainerinfo">
              <h1 className="specificFont">{brewery.breweryName}</h1>
              <RatingDisplay rating={brewery.rating}></RatingDisplay>

              <h2 className="specificHeader">About</h2>
              <div className="specificDesc">
                <div>{parse(brewery.description)}</div>
              </div>

              <h2 className="specificHeaderLike">
                {isLiked === false ? (
                  <FontAwesomeIcon
                    className="specificHeart"
                    onClick={onAddLike}
                    icon="fa-regular fa-heart"
                  />
                ) : (
                  <FontAwesomeIcon
                    className="specificHeart"
                    onClick={onDeleteLike}
                    icon="fa-solid fa-heart"
                  />
                )}
                {brewLikes.length}
              </h2>
            </div>
          </div>
          {/* <div className="specificBreweryContainerimgs">images placeholder</div> */}
          {/* <div className="sortButton">

</div> */}
          <div className="bottomSpecified">
            <div className="locationHolder">
              <h2 className="specificHeader">Location</h2>
              <div className="locationHolderSpecific">
                <p>{brewery.addressLineOne}</p>
                <p>
                  {brewery.city}, {brewery.state}, {brewery.zip}{" "}
                </p>
                <MapPageB brewery={brewery}></MapPageB>
              </div>
            </div>
            {reviews.length ? (
              <div className="reviewcardContainer">
                {reviews.map(
                  (
                    {
                      id,
                      User,
                      rating,
                      description,
                      ownerId,
                      createdAt,
                      updatedAt,
                    },
                    idx
                  ) => (
                    <ReveiwCard
                      id={id}
                      key={idx}
                      breweryId={+breweryId}
                      User={User}
                      rating={rating}
                      description={description}
                      ownerId={ownerId}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                    ></ReveiwCard>
                  )
                )}
              </div>
            ) : (
              <div className="specificHolder">
                <h2>There are no reviews</h2>
              </div>
            )}
          </div>

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
