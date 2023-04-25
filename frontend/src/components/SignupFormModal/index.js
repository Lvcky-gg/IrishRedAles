import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from '../../store/session';
import { clearErrors } from "../../store/session";
import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'

import './signup.css'

function SignupFormModal() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const validationErrors = useSelector((state)=>state.session.validationErrors)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState(false)
  const { closeModal, setOnModalClose } = useModal();
  const [inputValidate, setInputValidate] = useState([]);


useEffect(()=>{
  if(sessionUser){
    closeModal();
  }
  const cleanErrorMessage = () => {
    dispatch(clearErrors())
  }
  setOnModalClose(cleanErrorMessage)

},[sessionUser, closeModal, setOnModalClose, dispatch])

  // if (sessionUser) return navigate('/');


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit)
    if (password === confirmPassword) {
      dispatch(signUp({ email, username, firstName, lastName, password, confirmPassword }))
        .catch(async (res) => {
          setErrors([])
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    setErrors([])
    return setErrors(["Password must match confirm password"]);
  };

  return (
    <form className='signupForm' onSubmit={handleSubmit}>
      <div>
        <img src={logo} alt="#"></img>
      </div>

      <div>
      <label>
        First Name
      </label>
      <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
      <label>
        Last Name
      </label>
      <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
      <label>
        Email
      </label>
      <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
      <label>
        Username
      </label>
      <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
      <label>
        Password
      </label>
      <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
      <label>
        Confirm Password
      </label>
      <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
      <button type="submit" id="specificButtonSize"className="specificButton">Sign Up</button>
      </div>
      <div>
      <ul>
        {validationErrors && validationErrors.map((error, idx) => <li className="validation" key={idx}>{error}</li>)}
        {errors && errors.map((error, idx) => <li className="validation" key={idx}>{error}</li>)}
      </ul>
      </div>
    </form>
  );
}

export default SignupFormModal;
