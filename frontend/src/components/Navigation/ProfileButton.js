import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../store/session";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileButton({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [up, setUp] = useState(true);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    setUp(false);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
        setUp(true);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
  const handleClickForCreate = (e) => {
    e.preventDefault();
    navigate("/create-brewery");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    closeMenu();
    navigate("/");
  };

  const closeMenu = () => setShowMenu(false);
  const demoUserLogin = () => {
    const credential = {
      credential: "demo@user.io",
      password: "password",
    };
    dispatch(login(credential));
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button onClick={openMenu} className="profileButton buttonStyle">
        {up ? (
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        )}
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="dropComp">{user.username}</li>
            <li className="dropComp">{user.email}</li>
            <li className="button-container">
              <button
                onClick={handleClickForCreate}
                className="modalButton buttonStyle"
              >
                Create Brewery
              </button>
            </li>

            <li className="button-container">
              <button
                className="modalButton buttonStyle"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="button-container">
              <OpenModalButton
                buttonText="Log In"
                // onItemClick={closeMenu}
                onModalClose={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </li>

            <li className="button-container">
              <OpenModalButton
                buttonText="Sign Up"
                // onItemClick={closeMenu}
                onModalClose={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </li>

            <li className="button-container">
              <button
                className="modalButton buttonStyle"
                onClick={demoUserLogin}
              >
                DemoUser
              </button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
