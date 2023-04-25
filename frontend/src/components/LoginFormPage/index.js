import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";
import validateInput from "../../utils/validateInput";
import { clearErrors } from "../../store/session";
import { useEffect } from "react";
import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const validationErrors = useSelector(
    (state) => state.session.validationErrors
  );
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [inputValidate, setInputValidate] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInput({ credential, password });
    if (errors.length) {
      setInputValidate(errors);
    } else {
      setInputValidate([]);
      dispatch(login({ credential, password }));
    }
  };

  useEffect(() => {
    // Login successful?
    if (sessionUser) {
      return <Navigate to="/" />;
    }
    // clean errors if modal closed
    const clearErrorMessages = () => {
      dispatch(clearErrors());
    };

    return () => clearErrorMessages();
  }, [sessionUser, dispatch]);

  if (sessionUser) return <Navigate to="/" />;


  return (
    <div className="loginPage">
        <div>
        <img src={logo} alt="#"></img>
        </div>
      <form onSubmit={handleSubmit}>
        <div>
        <h1>Log In</h1>
        </div>

        <div className="handleLoginBox">
          <label>Credential</label>
          <input
          className='buttonStyle'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="handleLoginBox">
          <label>Password</label>
          <input
          className='buttonStyle'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="handleLoginBox">
          <button type="submit" className="specificButton">
            Log In
          </button>
        </div>
      </form>
      <ul className="modal-form-list-err">
        {inputValidate &&
          inputValidate.map((error, idx) => (
            <li key={idx}>
              <span style={{ color: "red", padding: "5px" }}>
                <i className="fas fa-exclamation-circle"></i>
              </span>
              {error}
            </li>
          ))}
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
  );
}

export default LoginFormPage;
