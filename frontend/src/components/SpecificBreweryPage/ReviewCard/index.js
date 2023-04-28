import React from "react";
import './reviewCard.css'
import { useDispatch, useSelector } from "react-redux";
import RatingDisplay from "../../RatingDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { createReviewLike, deleteReviewLike, getAllReviewLikes, getReviewLikes } from "../../../store/reviewLikes";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteReview, getReviewsByBrewery } from "../../../store/reviews";



const ReveiwCard = ({id, User, rating, description}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { breweryId } = useParams()
    const sessionUser = useSelector((state)=>state.session.user)
    const reviewLikes = useSelector((state) => state.reviewLikes.reviewLikes);
    let userId;
    if(sessionUser)userId = sessionUser.id
    let count = 0;
    let userString;
    if(User) userString = `${User.firstName} ${User.lastName[0].toUpperCase()}. Says...`
    const [isLiked, setIsLiked] = useState(true)
    const [likeIdState, setLikeIdState] = useState();

    for(let i = 0; i < reviewLikes.length; i++){
        if(reviewLikes[i].reviewId === id) {
            
            count+=1
        }
    }

  
    useEffect(() => {
        if(sessionUser){
            if(reviewLikes.length === 0)setIsLiked(false) 
            for(let i = 0; i < reviewLikes.length; i++){
                if(reviewLikes[i].userId === userId && reviewLikes[i].reviewId === id){
                    setIsLiked(true) }
                }
        }
      }, [reviewLikes, sessionUser]);

      const onAddLike = (e) => {
        e.preventDefault()
        if(sessionUser){
            dispatch(createReviewLike({
                userId:+userId,
                reviewId:+id
            }))
            setIsLiked(true)

            
        }else{
        navigate('/redirect-login')
    }

      }
      const onDeleteLike = (e) => {
        e.preventDefault()
        console.log(reviewLikes[reviewLikes.length -1])
        for(let i = 0; i < reviewLikes.length; i++){
            if(reviewLikes[i].userId === userId && reviewLikes[i].reviewId === id){
                dispatch(deleteReviewLike({reviewId:+id,likeId:reviewLikes[i].id}))
            }
        }
        setIsLiked(false)
    }

    const onDeleteReview = (e) => {
        e.preventDefault()
        if(window.confirm('Are you wure you want to delete this review?')){
            dispatch(deleteReview(+id))
            
        }
    }
    const onEdit = (e) => {
        e.preventDefault()
        navigate(`/breweries/${breweryId}/reviews/${id}/edit`)
    }
    return (
        <div className='reviewCard'>
            <div>
            <h2>{userString}</h2>
            <p>{description}</p>
            </div>
            <div>
            </div>
            <div className="reviewRate">
                <RatingDisplay
                rating={rating}
                />
                <div className="buttonGroupCardReview">
                    <h3 className="spaceItemsCard">

                   {isLiked === false ? (
                     <FontAwesomeIcon 
                     onClick={onAddLike}
                    
                      className="specificHeart"
                        icon="fa-regular fa-heart" />
               
                ) : ( 
              
                      <FontAwesomeIcon 
                      onClick={onDeleteLike}
                     
                       className="specificHeart"
                        icon="fa-solid fa-heart" /> 

                     )}  
     
                    {count}
                  </h3>
                  {User && (userId === User.id) &&
                  <FontAwesomeIcon 
                  onClick={onEdit}
                  className="spaceItemsCard specificHeart"
                  icon="fa-solid fa-pen-to-square" />}
                  {User &&  (userId === User.id) &&
                    <FontAwesomeIcon 
                    onClick={onDeleteReview}
                    className="spaceItemsCard specificHeart"
                    icon="fa-solid fa-trash-can" />}


                </div>

            </div>
            
        </div>
    )
}
export default ReveiwCard