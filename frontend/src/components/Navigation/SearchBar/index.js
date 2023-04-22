import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { filterBreweries, getAllBreweries } from "../../../store/breweries";
import './search.css'
import { filterState } from "../../../utils/filterState";

const Search = () => {
    const navigate = useNavigate();
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [searchUrl, setSearchUrl] = useState('/');

    const handleSearch = (e) => {
        e.preventDefault();
        if(stateInput){
            let stateVal = filterState(stateInput)
            console.log(stateVal)
        }
        
        if((stateInput != '') &&(cityInput != ''))
            setSearchUrl(`?city=${cityInput}&state=${stateInput}`)
        else if(cityInput != '')setSearchUrl(`?city=${cityInput}`)
        else if(stateInput != '')setSearchUrl(`?state=${stateInput}`)
        else navigate('/breweries')

    }

  
    useEffect(()=>{
        if(searchUrl){
            
            navigate(`/breweries${searchUrl}`)
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
            ></input>
            <input
            type="text"
            placeholder="State"
            value={stateInput}
            onChange={(e)=>setStateInput(e.target.value)}

            ></input>
            <button
            >Locate Brewery</button>

        </form>
    )
};
export default Search;