import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Geocode from "react-geocode";
import logo from "../../images/086f9e39-3d3b-431d-b928-a129c3901f2d-profile_image-300x300.png";
import RichEditor from "../RichEditor";
import { filterState } from "../../utils/filterState";
import breweries, {
  updateBreweries,
  getAllBreweries,
} from "../../store/breweries";
import { clearBrewErrors } from "../../store/breweries";
import { useParams } from "react-router-dom";
import { upperCaseCity } from "../../utils/uppercaseCity";

const EditBrewery = () => {
  const { breweryId } = useParams();
  Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const allBreweries = useSelector((state) => state.breweries.allBreweries);
  let brewery;
  for (let i = 0; i < allBreweries.length; i++) {
    if (allBreweries[i].id === +breweryId) brewery = allBreweries[i];
  }
  const validationErrors = useSelector(
    (state) => state.breweries.validationErrors
  );
  const ownerId = sessionUser.id;
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [addressLineOne, setAddressLineOne] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [details, setDetails] = useState("");
  let address;

  useEffect(() => {
    dispatch(getAllBreweries());
  }, [dispatch]);

  useEffect(() => {
    if (brewery) {
      setName(brewery.breweryName);
      setAddressLineOne(brewery.addressLineOne);
      setCity(brewery.city);
      setState(brewery.state);
      setZip(brewery.zip);
      setCountry(brewery.country);
      setDetails(brewery.description);
    }
  }, [allBreweries, brewery]);

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
        updateBreweries({
          breweryName: name,
          description: details,
          addressLineOne: addressLineOne,
          city: upperCaseCity(city),
          state: filterState(state.trim()),
          country,
          lat: +latitude,
          lng: +longitude,
          zip: zip,
          breweryId: +breweryId,
        })
      );

      if (updateBreweries.rejected.match(newBrew)) {
      } else {
        setName("");
        setAddressLineOne("");
        setCity("");
        setState("");
        setZip("");
        setCountry("");
        setLatitude("");
        setLongitude("");
        navigate(`/breweries/${breweryId}`);
      }
    }
  };
  return (
    <>
      <div className="makeBrewContainer">
        <h1 className="h1create">Edit Brewery</h1>
        <div className="breweryMakeform">
          <label>Brewery Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>Address Line One</label>
          <input
            value={addressLineOne}
            type="text"
            onChange={(e) => setAddressLineOne(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            value={city}
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>State</label>
          <input
            value={state}
            type="text"
            onChange={(e) => setState(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>

        <div>
          <label>Zip</label>
          <input
            value={zip}
            type="text"
            onChange={(e) => setZip(e.target.value)}
            className="buttonStyle"
          ></input>
        </div>
        <div>
          <label>Country</label>
          <input
            value={country}
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
        <RichEditor
          details={details}
          breweryId={+breweryId}
          handleEditorSubmit={handleEditorSubmit}
        ></RichEditor>
   
      </div>
    </>
  );
};
export default EditBrewery;
