import React, { useState, useEffect } from 'react';
import { authenticate } from './store/session';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Loader from './components/Loader';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
}, [dispatch]);

  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && <Routes>
      <Route path="/login" element={<LoginFormPage></LoginFormPage>}/>
      <Route path="/" element={<Home></Home>}/>
    </Routes>}
    </>
  );
}

export default App;
