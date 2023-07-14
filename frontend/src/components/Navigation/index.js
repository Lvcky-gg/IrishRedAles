import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Search from "./SearchBar";
import "./Navigation.css";
import logo from "../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();
  const onClickbtn = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="imgHollderNav">
        <img onClick={onClickbtn} src={logo} alt="#" className="navLogo"></img>
      </div>
      

      <div className="navDrop">
        {isLoaded && (
          <>
            <div className="navHomeLink">
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
            <Search className="searchTab"></Search>
            </div>
          </>
        )}
        {isLoaded && (
          <div className="shortenDiv">
            <ProfileButton user={sessionUser} />
            </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
