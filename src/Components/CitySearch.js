import React, { useState, useContext } from "react";
import classes from "./CitySearch.module.css";
import axios from "axios";
import Context from "../Utils/context";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4c0c41e683cd64751a875280cff3da0e";

function CitySearch(props) {
  const { dispatchDataReducer: dispatch } = useContext(Context);
  // const { setIsLoaded } = props;
  const [city, setCity] = useState("Istanbul");
  const LOCATION_CODE = city;
  const FULL_API_URL = `${API_URL}?q=${LOCATION_CODE}&appid=${API_KEY}`;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .get(FULL_API_URL)
      .then((response) => {
        dispatch({ type: "ON_LOAD", payload: response.data });
        // setIsLoaded(true);
        setCity("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`${classes.searchContainer}`}>
      <form onSubmit={handleOnSubmit} className={classes.searchForm}>
        <input
          className={classes.searchFormInput}
          onChange={(event) => setCity(event.target.value)}
          onFocus={() => setCity("")}
          value={city}
          type="text"
        ></input>
        <button className={classes.searchFormBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default CitySearch;
