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


const ReveiwCard = ({id, User, rating, description, ownerId, createdAt, updatedAt, breweryId}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state)=>state.session.user)
    const reviewLikes = useSelector((state) => state.reviewLikes.reviewLikes);
    const userId = sessionUser.id
    let count = 0;
    const userString = `${User.firstName} ${User.lastName[0].toUpperCase()}. Says...`
    const [isLiked, setIsLiked] = useState(false)
    const [likeIdState, setLikeIdState] = useState();
    
    useEffect(()=>{
        dispatch(getAllReviewLikes())
    },[dispatch])


    for(let i = 0; i < reviewLikes.length; i++){
        if(reviewLikes[i].reviewId === id) {
            
            count+=1
        }
    }

    useEffect(() => {
        if(sessionUser){
            if(reviewLikes.length === 0)setIsLiked(false)
        for (let i = 0; i < reviewLikes.length; i++) {
            console.log(reviewLikes[i].userId)
          if (reviewLikes[i].userId === +userId) {
            console.log(reviewLikes[i])
            setLikeIdState(reviewLikes[i].id);
            setIsLiked(true);
          } else setIsLiked(false)
        }
        }
      }, [reviewLikes, sessionUser, isLiked]);

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
        dispatch(deleteReviewLike({reviewId:+id,likeId:likeIdState}))
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