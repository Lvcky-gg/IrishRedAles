import React, { useEffect } from "react";
import "./Writereview.css";
import logo from "../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  clearreviewErrors,
  createReveiwByBrewery,
  getAllReviews,
  getReviewsByBrewery,
} from "../../store/reviews";
import { getReviewLikes } from "../../store/reviewLikes";
import { useSelector } from "react-redux";

const colors = {
  white: "#B4C4BC",
  grey: "black",
};

const WriteReview = () => {
  const { breweryId } = useParams();
  const [currvalue, setCurrValue] = useState(0);
  const [hoverVal, setHoverVal] = useState(undefined);
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationErrors = useSelector(
    (state) => state.reviews.validationErrors
  );

  const handleClick = (val) => {
    setCurrValue(val);
  };
  const handleMouseOver = (val) => {
    setHoverVal(val);
  };
  const onSubmission = async (e) => {
    e.preventDefault();
    dispatch(clearreviewErrors());
    const newReview = await dispatch(
      createReveiwByBrewery({
        description: details,
        breweryId: +breweryId,
        rating: hoverVal - 1,
      })
    );

    if (newReview.error) {
    } else {
        dispatch(clearreviewErrors())
        navigate(`/breweries/${breweryId}`);}
  };
  useEffect(() => {
    dispatch(getReviewsByBrewery(breweryId));
    dispatch(getReviewLikes());
  }, [dispatch]);
  return (
    <div className="writeReviewRoot">
      <div>
        <img className="createReviewImg" src={logo} alt="#"></img>
      </div>

      <div className="writeReview">
        <h2 className="writeReviewH2">Create Review</h2>
        <p className="ratingStarSelector">Rating</p>
        <div>
          <div className="starSelector">
            {[1, 2, 3, 4, 5].map((idx) => {
              return (
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  key={idx}
                  color={
                    (hoverVal || currvalue) > idx ? colors.white : colors.grey
                  }
                  onClick={() => handleClick(idx + 1)}
                  onMouseOver={() => handleMouseOver(idx + 1)}
                />
              );
            })}
          </div>
        </div>
        <form onSubmit={onSubmission} className="writeReviewForm">
          <div className="formHoldMakeReview">
            <label className="labelForTextArea">Write Review</label>
            <textarea
              className="buttonStyle textArea"
              type="textarea"
              name="textValue"
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <button className="buttonStyle buttonStyleSize">Submit</button>
        </form>
        <ul className="listSignUpOne">
          {validationErrors &&
            validationErrors.map((error, idx) => (
              <li key={idx}>
                <span style={{ color: "red", padding: "5px" }}>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                {error}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default WriteReview;
