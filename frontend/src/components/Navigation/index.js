import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from './SearchBar';
import './Navigation.css';
import logo  from  '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'




function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);
    const navigate = useNavigate();

    return (
        <div className="nav">
            <div>
                <img src={logo} alt="#" className='navLogo'></img>
            </div>
            <Search></Search>
          
            <ul className="navDrop">
                {isLoaded && (
                    <>
                        <li className="navHomeLink">
                            <NavLink  to="/">Home</NavLink>
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