import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../store/session';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProfileButton({ user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
        closeMenu();
        navigate('/');
    };

    const closeMenu = () => setShowMenu(false);
    const demoUserLogin = () => {
        const credential = {
            credential: 'demo@user.io',
            password: 'password',
        };
        dispatch(login(credential));
        closeMenu();
    };

    const ulClassName = 'profile-dropdown' + (showMenu ? '' : ' hidden');

    return (
        <>
            <button onClick={openMenu} className="profileButton">
               <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            </button>
            <ul className={ulClassName} ref={ulRef}>
                {user ? (
                    <>
                        <li className="dropComp">{user.username}</li>
                        <li className="dropComp">{user.email}</li>
                        <li className="button-container">
                            <button
                                className="modalButton"
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
                                className="modalButton"
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