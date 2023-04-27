import React from "react";
import './reviewCard.css'
import { useDispatch, useSelector } from "react-redux";
import RatingDisplay from "../../RatingDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { createReviewLike, deleteReviewLike, getAllReviewLikes, getReviewLikes } from "../../../store/reviewLikes";

import { useNavigate } from "react-router-dom";



const ReveiwCard = ({id, User, rating, description}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state)=>state.session.user)
    const reviewLikes = useSelector((state) => state.reviewLikes.reviewLikes);
    let userId;
    if(sessionUser)userId = sessionUser.id
    let count = 0;
    const userString = `${User.firstName} ${User.lastName[0].toUpperCase()}. Says...`
    const [isLiked, setIsLiked] = useState(true)
    const [likeIdState, setLikeIdState] = useState();

    useEffect(()=>{
        dispatch(getAllReviewLikes({reviewId:+id}))
    },[dispatch])

    for(let i = 0; i < reviewLikes.length; i++){
        if(reviewLikes[i].reviewId === id) {
            
            count+=1
        }
    }
    // for(let i = 0; i < reviewLikes.length; i++){
    //     if(reviewLikes[i].userId !== userId)setIsLiked(false) 

    // }  
  
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
                  {userId === User.id &&
                  <FontAwesomeIcon 
                  className="spaceItemsCard specificHeart"
                  icon="fa-solid fa-pen-to-square" />}
                  {userId === User.id &&
                    <FontAwesomeIcon 
                    className="spaceItemsCard specificHeart"
                    icon="fa-solid fa-trash-can" />}


                </div>

            </div>
            
        </div>
    )
}
export default ReveiwCard