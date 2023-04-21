import React, { useState, useEffect } from 'react';
import { authenticate } from './store/session';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Map from './components/Map'
import Loader from './components/Loader';
import AllBrew from './components/AllBrewery';
import {
 faUserCircle, faChevronUp, faChevronDown, faLocationPin
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
}, [dispatch]);
library.add(fas, faUserCircle, faChevronDown, faChevronUp, faLocationPin)
console.log(navigator.geolocation.getCurrentPosition((pos)=>pos.coords.latitude))
  return (
    <>
    <Loader></Loader>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && <Routes>
      <Route path="/login" element={<LoginFormPage></LoginFormPage>}/>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/breweries" element={<AllBrew></AllBrew>}/>
    </Routes>}
    </>
  );
}

export default App;
