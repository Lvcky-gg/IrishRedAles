import React, { useState } from "react";
import "./home.css";
import topImage from "../../images/view-beer-taps-brewery.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllReviews } from "../../store/reviews";
import {
  filterBreweries,
  getAllBreweries,
  sortBreweriesByNewest,
} from "../../store/breweries";
import { useSelector } from "react-redux";
import BreweryCard from "../BreweryCard";
import Geocode from "react-geocode";
import { upperCaseCity } from "../../utils/uppercaseCity";
import { useNavigate } from "react-router-dom";
import { filterState } from "../../utils/filterState";

Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breweries = useSelector((state) => state.breweries.allBreweries);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const displayBreweries = [];

  function showPosition(position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }

  if (navigator.geolocation) {
    (async () => {
      await navigator.geolocation.getCurrentPosition(showPosition, (e) => e, {
        maximumAge: 60000,
        timeout: 5000,
      });
      await Geocode.fromLatLng(lat, lng).then(
        (res) => {
          setState(res.results[0].address_components[5].short_name);
          setCity(res.results[0].address_components[3].long_name);
        },
        (error) => {}
      );
    })();
  }

  if (state && city) {
    for (let i = 0; i < breweries.length; i++) {
      if (
        breweries[i].city === upperCaseCity(city) &&
        breweries[i].state === filterState(state)
      ) {
        displayBreweries.push(breweries[i]);
      }
    }
  }

  useEffect(() => {
    dispatch(getAllBreweries());
    dispatch(sortBreweriesByNewest());
    dispatch(getAllReviews());
  }, [dispatch]);

  return (
    <div className="homeRoot">
      <img className="homeImgTop" src={topImage} alt="#"></img>
      <div className="insetHome">
        <div>
          <h2 className="irishRedAles">Irish Red Ales</h2>
          <div className="brewsAndReviews">
            <h1 className="brewsAndReviewsGreen">Brews</h1>
            <h1 className="brewsAndReviewsWhite">and</h1>
            <h1 className="brewsAndReviewsOrange">Reviews</h1>
          </div>
          <div className="homeCards">
            {displayBreweries.length
              ? displayBreweries
                  .filter((brewery, idx) => idx < 10)
                  .map(({ id, breweryName, city, state }) => (
                    <BreweryCard
                      id={id}
                      key={id}
                      breweryName={breweryName}
                      city={city}
                      state={state}
                    ></BreweryCard>
                  ))
              : breweries
                  .filter((brewery, idx) => idx < 10)
                  .map(({ id, breweryName, city, state }) => (
                    <BreweryCard
                      id={id}
                      key={id}
                      breweryName={breweryName}
                      city={city}
                      state={state}
                    ></BreweryCard>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
