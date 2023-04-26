import React, { useState, useEffect } from 'react';
import { authenticate } from './store/session';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, fas } from '@fortawesome/free-solid-svg-icons';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Map from './components/Map'
import Loader from './components/Loader';
import AllBrew from './components/AllBrewery';
import SpecificBrewery from './components/SpecificBreweryPage';
import RedirectLogin from './components/LoginRedirect'
import SignupFormPage from './components/SignupFormPage';
import Footer from './components/Footer';
import CreateBreweryComponent  from './components/CreateBrewery'
import EditBrewery from './components/editBreweryPage';
import {
 faUserCircle, 
 faChevronUp, 
 faChevronDown, 
 faLocationPin, 
 faStar, 
 faBeerMugEmpty,
 faThumbsUp,
 faPenToSquare,
 faThumbsDown,
 faHouse,
 faTrashCan,
 faHeart,

} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSquareGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
}, [dispatch]);
library.add(fas, 
  faUserCircle, 
  faChevronDown, 
  faChevronUp, 
  faLocationPin, 
  faStar,
  faBeerMugEmpty,
  faThumbsUp,
  faPenToSquare,
  faThumbsDown,
  faHouse,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSquareGithub,
  faTwitter,
  faTrashCan,
  faHeart,
  )

  return (
    <>
    <Loader></Loader>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && <Routes>
      <Route path="/login" element={<LoginFormPage></LoginFormPage>}/>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/breweries/:breweryId" element={<SpecificBrewery></SpecificBrewery>}/>
      <Route path="/breweries" element={<AllBrew></AllBrew>}/>
      <Route path="redirect-login" element={<RedirectLogin></RedirectLogin>}/>
      <Route path="/signup" element={<SignupFormPage></SignupFormPage>}/>
      <Route path="/create-brewery" element={<CreateBreweryComponent></CreateBreweryComponent>}/>
      <Route path="/breweries/:breweryId/edit-brewery" element={<EditBrewery/>}/>
      
    </Routes>}
    <Footer></Footer>
    </>
  );
}

export default App;
