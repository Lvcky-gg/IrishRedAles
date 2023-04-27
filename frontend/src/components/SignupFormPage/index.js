import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUp } from "../../store/session";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../store/session";
import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'

import "./SignupFrom.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const validationErrors = useSelector(
    (state) => state.session.validationErrors
  );
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (sessionUser) {
      navigate("/");
    }
    const cleanErrorMessage = () => {
      dispatch(clearErrors());
    };
  }, [sessionUser, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit);
    if (password === confirmPassword) {
      dispatch(
        signUp({
          email,
          username,
          firstName,
          lastName,
          password,
          confirmPassword,
        })
      ).catch(async (res) => {
        setErrors([]);
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    setErrors([]);
    return setErrors(["Password must match confirm password"]);
  };

  return (
    <div className="loginPage">
        <div>
        <img src={logo} alt="#"></img>
        </div>
      
      <form onSubmit={handleSubmit}>
  
        <div>
        <h1>Sign Up</h1>
        </div>
        <div>
      <label>
        First Name
      </label>
      <input
      className='buttonStyle'
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
      className='buttonStyle'
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
      className='buttonStyle'
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
      className='buttonStyle'
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
      className='buttonStyle'
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
          className='buttonStyle' 
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
      <button type="submit" className="specificButton">Sign Up</button>
      </div>
      </form>
      <ul className="listSignUp">
          {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
          {validationErrors &&
            validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
    </div>
  );
}

export default SignupFormPage;
