import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Geocode from "react-geocode";
import "./CreateBrewery.css";
import RichEditor from "../RichEditor";
import { filterState } from "../../utils/filterState";
import { createBrewery, getAllBreweries } from "../../store/breweries";
import { clearBrewErrors } from "../../store/breweries";
import { upperCaseCity } from "../../utils/uppercaseCity";

const CreateBreweryComponent = () => {
  Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationErrors = useSelector(
    (state) => state.breweries.validationErrors
  );
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [addressLineOne, setAddressLineOne] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  let address;
  useEffect(() => {
    dispatch(getAllBreweries());
  }, [dispatch]);

  useEffect(() => {
    address =
      addressLineOne +
      ", " +
      city +
      ", " +
      filterState(state) +
      " " +
      zip +
      " " +
      country;
    if (addressLineOne && city && state && zip && zip.length >= 5) {
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
        },
        (error) => {}
      );
    } else {
      setLatitude("");
      setLongitude("");
    }
  }, [addressLineOne, city, state, zip, country, latitude, longitude]);

  const handleEditorSubmit = async (e, { details }) => {
    e.preventDefault();

    if (latitude === "" || longitude === "") {
      setErrors(["Invalid address"]);
    } else {
      setErrors([]);
      dispatch(clearBrewErrors());
      const newBrew = await dispatch(
        createBrewery({
          breweryName: name,
          description: details,
          addressLineOne: addressLineOne,
          city: upperCaseCity(city),
          state: filterState(state.trim()),
          country,
          lat: +latitude,
          lng: +longitude,
          zip: zip,
        })
      );

      if (createBrewery.rejected.match(newBrew)) {
      } else {
        setErrors([]);
        dispatch(clearBrewErrors());
        setName("");
        setAddressLineOne("");
        setCity("");
        setState("");
        setZip("");
        setCountry("");
        setLatitude("");
        setLongitude("");
        navigate(`/breweries/${newBrew.payload.id}`);
      }
    }
  };
  return (
    <>
      <div className="makeBrewContainer">
        <h1 className="h1create">Create a Brewery</h1>
        <div className="breweryMakeform">
          <label>Brewery Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>Address Line One</label>
          <input
            type="text"
            onChange={(e) => setAddressLineOne(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            onChange={(e) => setState(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>

        <div>
          <label>Zip</label>
          <input
            type="text"
            onChange={(e) => setZip(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <h2 className="h1create">About</h2>
        <ul className="listSignUp">
          {errors &&
            errors.map((error, idx) => (
              <li key={idx}>
                <span style={{ color: "red", padding: "5px" }}>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                {error}
              </li>
            ))}
          {validationErrors &&
            validationErrors.map((error, idx) => (
              <li key={idx}>
                <span style={{ color: "red", padding: "5px" }}>
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                {error}
              </li>
            ))}
        </ul>
        <RichEditor handleEditorSubmit={handleEditorSubmit}></RichEditor>
      </div>
    </>
  );
};
export default CreateBreweryComponent;
