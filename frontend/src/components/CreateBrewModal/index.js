import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { createBrew } from "../../store/brews";


import logo from "../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png";
import "./createBrew.css";

const CreateBrew = ({breweryId}) => {
    const dispatch = useDispatch()
  const { closeModal} = useModal();
  const [price, setPrice] = useState(0.00);
  const [name, setName] = useState("");
  const errors = useSelector((state)=> state.brews.errors)
 const onSubmit = async(e) => {
    e.preventDefault();
    const newBrew = await dispatch(createBrew({
        breweryId:+breweryId,
        name,
        price
    }))
    if (createBrew.rejected.match(newBrew)) {
    } else {
        setPrice(0.00)
        setName('')
        closeModal()
    }

  }
  return (
    <div>
        <div
        className="imgCreateBrew">
      <img 
      
      src={logo} alt="#"></img>
      </div>
      <form 
      onSubmit={onSubmit}
      className="createBrewForm">
        <div>
          <label>Name</label>
          <input
          className="buttonStyle"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
          className="buttonStyle"
            type="number"
            value={price}
            min="0.00"
            step="0.01"
            precision={2}
            onChange={(e) => setPrice(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <button
          className="buttonStyle"
          >Submit</button>
        </div>
      </form>
      <ul
      className="uploadErr">
      {errors && errors.length &&
            errors.map((error, idx) => (
              <li key={idx}>
                <span style={{ color: "red", padding: "5px" }}>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                {error}
              </li>
            ))}
            </ul>
    </div>
  );
};
export default CreateBrew;
