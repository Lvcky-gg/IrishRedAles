import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'
import './loginRedirect.css'
// import './Redirect.css';


const RedirectLogin = () => {
    const [redirectTimer, setRedirectTimer] = useState(5);
    const navigate = useNavigate();
    const message = "You should login, lets do that"

    const sendToLogin = (e) => {
        e.preventDefault();
        navigate('/login')
    }
    const sendToSignUp = (e) => {
        e.preventDefault();
        navigate('/signup')
    }
 

    useEffect(()=>{
        const startTime = Date.now();
        

        const redirectInterval = setInterval(() => {
            setRedirectTimer(Math.ceil((startTime + 5000 - Date.now()) / 1000));
        }, 1000);
        const redirectTimeout = setTimeout(() => {
            navigate('/login');

        }, 5000);
        return () => {
            clearInterval(redirectInterval);
            clearTimeout(redirectTimeout);
        };
    },[]);


    return (
        <div className='redirect'>

            <div className="countRedirect"> 
            <img src={logo} className="inner-countRedirect"/>
            </div>
            <h1>{message} in {redirectTimer}.</h1>
            <div className="loginRedirectBtn">
            <button 
            className="specificButton"
            onClick={sendToLogin}
            >Login</button>
            <button 
            className="specificButton"
            onClick={sendToSignUp}
            >Sign Up</button>
        </div>
        </div>
        )

}

export default RedirectLogin;