import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';




function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    const navigate = useNavigate();

    return (
        <div className="nav">
            <div className="nav-img-container" onClick={() => navigate('/')}>
               
            </div>
          
            <ul className="navDrop">
                {isLoaded && (
                    <>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-questions/">Questions</NavLink>
                        </li>
                    </>
                )}
                {isLoaded && (
                    <li>
                        <ProfileButton user={sessionUser} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Navigation;