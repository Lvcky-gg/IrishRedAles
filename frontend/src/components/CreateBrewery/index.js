import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Geocode from 'react-geocode'
import './CreateBrewery.css'
import logo from '../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png'
import RichEditor from "../RichEditor";
import { filterState } from "../../utils/filterState";

const CreateBreweryComponent = () => {
    Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY)
    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    const sessionUser = useSelector((state)=>state.session.user);
    const ownerId = sessionUser.id;
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [addressLineOne, setAddressLineOne] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    let address;
    
    useEffect(()=>{
        address = addressLineOne + ", " +
         city + ", " + filterState(state) + " " + zip + " " + country
         if(addressLineOne && city && state && zip && zip.length >=5){
            Geocode.fromAddress(address).then(
                (response) => {
                  const {lat, lng} = response.results[0].geometry.location
                  setLatitude(lat)
                  setLongitude(lng)
                  
                },
                (error) => {
                  console.error(error);
                }
              );
              
        }else{
            setLatitude('')
            setLongitude('')
        }
    },[addressLineOne, city, state, zip, country, latitude, longitude])

    const  handleEditorSubmit = (e, {details}) => {
        e.preventDefault();
        //brings data back to us
        if(latitude === '' || longitude === ''){
            setErrors(["Invalid address"])
        }else{
            setErrors([])
        }
  console.log(latitude)      
console.log(details)

    }
    return (
        <>
        
        {/* <img 
        className='createBrewImg'
        src={logo} alt="#"></img> */}
        <div className="makeBrewContainer">
        <h1 className="h1create">Create a Brewery</h1>
            <div className="breweryMakeform">
                <label>Brewery Name</label>
                <input 
                type="text"
                onChange={(e)=>setName(e.target.value)}
                className="buttonStyle"></input>
            </div>
            <div>
                <label>Address Line One</label>
                <input 
                type="text"
                onChange={(e)=>setAddressLineOne(e.target.value)}
                className="buttonStyle"></input>
            </div>
            <div>
                <label>City</label>
                <input 
                type="text"
                onChange={(e)=>setCity(e.target.value)}
                className="buttonStyle"></input>
            </div>
            <div>
                <label>State</label>
                <input 
                type="text"
                onChange={(e)=>setState(e.target.value)}
                className="buttonStyle"></input>
            </div>

            <div>
                <label>Zip</label>
                <input 
                type="text"
                onChange={(e)=>setZip(e.target.value)}
                className="buttonStyle"></input>
            </div>
            <div>
                <label>Country</label>
                <input 
                type="text"
                onChange={(e)=>setCountry(e.target.value)}
                className="buttonStyle"></input>
            </div>
            <h2 className="h1create">About</h2>
            <RichEditor
            handleEditorSubmit={handleEditorSubmit}
            ></RichEditor>
            <ul className="listSignUp">
            {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </div>
        </>
    )
}
export default CreateBreweryComponent 