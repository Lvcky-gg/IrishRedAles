import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import "./imgUpload.css";
import { createImg, getImg } from "../../store/images";

import logo from "../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png";

const UploadImg = ({ breweryId }) => {
  const { closeModal, setOnModalClose } = useModal();
  const validFile = ["image/jpg", "image/jpeg", "image/png"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState([]);
  const dispatch = useDispatch();
  // console.log(file)
  const submitImg = (e) => {
    e.preventDefault();
    if(file){
    if (validFile.find((type) =>type === file.type )) {
      dispatch(
        createImg({
          breweryId,
          image: file,
        })
      );
      closeModal()
    } else {
      setError(["Invalid file type."]);
    }
}else{
    setError(["File Required."]);
}
    return;
  };

  return (
    <div className="submitImgFormOut">
        <img src={logo} alt="#"></img>
        
      <form 
      className="submitImgForm"
      onSubmit={submitImg}>
        <input
          className="buttonStyle"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="buttonStyle">Submit</button>
      </form>
      {error[0] && (
        <div className='uploadErr'>
          <span style={{ color: "red", padding: "5px" }}>
            <i className="fas fa-exclamation-circle"></i>
          </span>
          {error[0]}
        </div>
      )}
    </div>
  );
};
export default UploadImg;
