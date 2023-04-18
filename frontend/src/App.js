import React, { useState, useEffect } from 'react';
import { authenticate } from './store/session';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
}, [dispatch]);

  return (
    <h1>Hello from App</h1>
  );
}

export default App;
