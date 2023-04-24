import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { filterBreweries, getAllBreweries } from "../../../store/breweries";
import './search.css'
import { filterState } from "../../../utils/filterState";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [searchUrl, setSearchUrl] = useState('/');

    const handleSearch = (e) => {
        e.preventDefault();  
        let stateVal = filterState(stateInput)
        if((stateInput != '') &&(cityInput != '')){
            setSearchUrl(`?city=${cityInput}&state=${stateVal}`)
        }
        else if(cityInput != ''){
            setSearchUrl(`?city=${cityInput}`)}
        else if(stateInput != ''){
            console.log("hello")
            setSearchUrl(`?state=${stateVal}`)}
            navigate('/breweries')

    }

  
    useEffect(()=>{
        if(searchUrl.length > 1 && !searchUrl.startsWith('/') ){
            navigate(`/breweries${searchUrl}`)

            dispatch(filterBreweries())
            setStateInput('')
            setCityInput('')
            setSearchUrl('')
        }
    },[searchUrl, navigate])

    return (
        <form className="searchBar" onSubmit={handleSearch}>
            <input
            type="text"
            placeholder='City'
            value={cityInput}
            onChange={(e)=>setCityInput(e.target.value)}
            className="buttonStyle search"
            ></input>
            <input
            type="text"
            placeholder="State"
            value={stateInput}
            onChange={(e)=>setStateInput(e.target.value)}
            className="buttonStyle search"

            ></input>
            <button className="buttonStyle"
            >Locate Brewery</button>

        </form>
    )
};
export default Search;