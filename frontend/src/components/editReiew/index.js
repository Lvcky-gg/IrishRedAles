import React, { useEffect } from "react";

import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearreviewErrors,  getAllReviews, getReviewsByBrewery, updateReview } from "../../store/reviews";
import { getReviewLikes } from "../../store/reviewLikes";
import { useSelector } from "react-redux";



const colors = {
    white:"#B4C4BC",
    grey:"black"
}

const EditReview = () => {
    const {breweryId, reviewId} = useParams()
    const reviews = useSelector((state)=>state.reviews.allReviews)
    const review = reviews.filter((review)=>+review.id === +reviewId)[0]
    const [currvalue, setCurrValue] = useState();
    const [hoverVal, setHoverVal] = useState();
    const [details, setDetails] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const validationErrors = useSelector(
        (state) => state.reviews.validationErrors
      );
    

    const handleClick = (val) => {
        setCurrValue(val)
    }
    const handleMouseOver = (val)=> {
        setHoverVal(val)
    }
  
    const onSubmission = async(e) => {
        e.preventDefault()
        dispatch(clearreviewErrors())
       const newReview = await dispatch(updateReview({
            description:details,
            reviewId:+reviewId,
            rating:hoverVal-1
        }))
        
        if(newReview.error){
        }
        
        else{ 
            dispatch(clearreviewErrors())
            navigate(`/breweries/${breweryId}`)}
    }
    useEffect(()=>{
        if(review){
            setCurrValue(review.rating+1)
            setHoverVal(review.rating+1)
            setDetails(review.description)
        }
        
    },[reviews, review])
    useEffect(()=>{
        dispatch(getReviewsByBrewery(breweryId))
        dispatch(getReviewLikes())
        dispatch(getAllReviews())
    },[dispatch])
    return (
        <div className="writeReviewRoot">
        <div>
            <img 
            className="createReviewImg"
            src={logo} 
            alt="#"></img>
        </div>

        <div className="writeReview">
            <h2 className="writeReviewH2">Edit Review</h2>
            <p className='ratingStarSelector'>Rating</p>
            <div>
            
            <div className="starSelector">
            {[1,2,3,4,5].map(idx=>{
               
               return (
                        <FontAwesomeIcon 
                        icon="fa-solid fa-star" 
                        key={idx}
                        color={(hoverVal || currvalue) > idx ? colors.white : colors.grey}
                        onClick={()=> handleClick(idx + 1)}
                        onMouseOver={()=>handleMouseOver(idx + 1)}
                        
                        />
               
               ) 
            })}

        </div>
             </div>
            <form 
            onSubmit={onSubmission}
            className="writeReviewForm">
                <div className="formHoldMakeReview">
                    <label
                    className="labelForTextArea"
                    >
                    Write Review
                    </label>
                    <textarea
                    className="buttonStyle textArea"
                    type="textarea" 
                    value={details}
                    name="textValue"
                    onChange={(e) => setDetails(e.target.value)}
                    >
                    
                    </textarea>
                </div>
                <button
                className="buttonStyle buttonStyleSize"
                >Submit</button>
            </form>
            <ul className="listSignUpOne">
          {validationErrors &&
            validationErrors.map((error, idx) =>               <li key={idx}>
            <span style={{ color: "red", padding: "5px" }}>
              <i className="fas fa-exclamation-circle"></i>
            </span>
            {error}
          </li>)}
        </ul>
        </div>
        
        </div>
    )

}
export default EditReview