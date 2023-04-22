import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Redirect.css';
import { useSelector } from 'react-redux';

const Redirect = () => {
    const [redirectTimer, setRedirectTimer] = useState(5);
    const navigate = useNavigate();
    const message = "This keg is empty, returning home."

    useEffect(()=>{
        const startTime = Date.now();

        const redirectInterval = setInterval(() => {
            setRedirectTimer(Math.ceil((startTime + 5000 - Date.now()) / 1000));
        }, 1000);
        const redirectTimeout = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => {
            clearInterval(redirectInterval);
            clearTimeout(redirectTimeout);
        };
    },[]);

    return (
        <div className='redirect'>

            <div className="countRedirect"> 
            <div className="inner-countRedirect">
            </div>
            <span>{redirectTimer}</span>
            </div>
            <h1>{message}</h1>
        </div>
    )
}

export default Redirect;