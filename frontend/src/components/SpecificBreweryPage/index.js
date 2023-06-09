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
import { deleteImg, getImg } from "../../store/images";
import { deleteBrew, getBrews } from "../../store/brews";
import OpenModalButton from "../OpenModalButton";
import CreateBrew from "../CreateBrewModal";
import { useModal } from "../../context/Modal";
import EditBrew from "../editBeer";
import { returnState } from "../../utils/returnState";

export const SpecificBrewery = () => {
  const { breweryId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [likeIdState, setLikeIdState] = useState();
  const [imgLen, setImgLen] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breweries = useSelector((state) => state.breweries.allBreweries);
  const reviews = useSelector((state) => state.reviews.allReviews);
  const images = useSelector((state) => state.images.allImages);
  const brewLikes = useSelector((state) => state.breweryLikes.breweryLikes);
  const sessionUser = useSelector((state) => state.session.user);
  const brews = useSelector((state)=> state.brews.brews.beers);
  const { setModalContent } = useModal();
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
    dispatch(getImg({ breweryId }));
    dispatch(getBrews(+breweryId))
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

  const onDeletePhoto = (e) => {
    e.preventDefault();
    if (+sessionUser.id === +images[imgLen].userId) {
      if (window.confirm("Are you sure you want to delete this Image?")) {
        dispatch(deleteImg(+images[imgLen].id));

        setImgLen(0);
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
  const onEditBeer = (e, id, name, price) => {
    e.preventDefault()
    setModalContent(
    <EditBrew
    beerId={+id}
    beername={name}
    beerprice={price}
    ></EditBrew>);
   
  }
  const onDeleteBeer = (e, id) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this Brew?")) {
      dispatch(deleteBrew(+id))
    }
  }
  return (
    <div>
      {brewery ? (
        <div>
          <div className="specificBreweryContainer">
            <div className="specificLeft">
              {sessionUser &&
              images[imgLen] &&
              images[imgLen].userId === sessionUser.id ? (
                <div className="buttonCenterDelete">
                  <button onClick={onDeletePhoto} className="buttonStyle">
                    Delete Image
                  </button>
                </div>
              ) : (
                <p></p>
              )}
              {images[imgLen] ? (
                <img
                  className="specificBreweryContainerIMG"
                  src={images[imgLen].URL}
                  alt="#"
                />
              ) : (
                <img
                  className="specificBreweryContainerIMG"
                  alt="#"
                  src="https://imgs.search.brave.com/xjs25IGx1dhPbD6ueLPad87O61xUBgTRbd8qeIHCFwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/aUZzel90dlB5R0Vw/VXpoSDFONkVRSGFG/aiZwaWQ9QXBp"
                />
              )}

              {images.length > 1 && (
                <div className="siideArrows">
                  <FontAwesomeIcon
                    onClick={(e) => {
                      e.preventDefault();
                      if (imgLen > 0) {
                        setImgLen(imgLen - 1);
                      } else {
                        setImgLen(images.length - 1);
                      }
                    }}
                    icon="fa-solid fa-chevron-left"
                  />
                  <FontAwesomeIcon
                    onClick={(e) => {
                      e.preventDefault();
                      if (imgLen < images.length - 1) {
                        setImgLen(imgLen + 1);
                      } else {
                        setImgLen(0);
                      }
                    }}
                    icon="fa-solid fa-chevron-right"
                  />
                </div>
              )}

              <div className="specificBreweryContainerBtn">
                <button className="specificButton" onClick={onAddReview}>
                  <FontAwesomeIcon icon="fa-solid fa-beer-mug-empty" />
                  <p>Review</p>
                </button>

                {sessionUser && (
                  <OpenImgModalButton
                    modalComponent={<UploadImg breweryId={+breweryId} />}
                  ></OpenImgModalButton>
                )}

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
          <div className="sortButton">
            <h1 className="menuHead">Brews</h1>
           { sessionUser && +sessionUser.id === brewery.ownerId &&
           <div className="createBrewModal">
             <OpenModalButton
             
             buttonText="Add Brew"
            //  onModalClose={closeMenu}
             modalComponent={
             <CreateBrew
             breweryId={breweryId}
             />}/>
             </div>}
            <div className="menuHolder">
                  {
                    brews && brews.length ?(
                      brews.map(({id,name, price})=>(
                        <h4
                          key={id}
                        >{`Brew: ${name} | Price: $${price}`}{
                          sessionUser && +sessionUser.id === +brewery.ownerId && (
                            <div className="buttonsEditBeer">
                            <FontAwesomeIcon 
                            onClick={(e)=>onEditBeer(e, id, name, price)}
                            className="penBrews"
                            icon="fa-solid fa-pen-to-square" />
                            {"      "}
                            <FontAwesomeIcon 
                            onClick={(e)=>onDeleteBeer(e,id)}
                            className="penBrews"
                            icon="fa-solid fa-trash-can" />
                            </div>
                          )
                        }</h4>
                      ))

                    ):(
                      <h2>There are no brews here yet</h2>
                      
                    )
                  }
              </div>

            </div>
             {/* <div className="specificBreweryContainerimgs">images placeholder</div> */}
          <div className="bottomSpecified">
            <div className="locationHolder">
              <h2 className="specificHeader">Location</h2>
              <div className="locationHolderSpecific">
                <p>{brewery.addressLineOne}</p>
                <p>
                  {brewery.city}, {returnState(brewery.state)}, {brewery.zip}{" "}
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
